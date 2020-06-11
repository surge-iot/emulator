require('dotenv').config()

const mqtt = require('mqtt');
const schema = require('./schema');
var mqttClient = mqtt.connect(process.env.BROKER_URL || 'mqtt://localhost');
mqttClient.on('connect', function () {
    console.log('Connected to broker');
    for (let point of schema){
        setInterval(function(){
            mqttClient.publish(point.topic, JSON.stringify(point.data()))
            if(process.env.NODE_ENV!=='production'){
                console.log(point.data());
            }
        }, point.interval);
    }
})