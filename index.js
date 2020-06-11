require('dotenv').config()

const mqtt = require('mqtt');
const schema = require('./schema');
var mqttClient = mqtt.connect(process.env.brokerUrl || 'mqtt://localhost');
mqttClient.on('connect', function () {
    console.log('Connected to broker');
    for (let point of schema){
        setInterval(function(){
            mqttClient.publish(point.topic, JSON.stringify(point.data()))
            console.log(point.data());
        }, point.interval);
    }
})