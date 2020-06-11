# Sensor Emulator

Emulates dummy sensors publishing data to an MQTT topic based on a given schema. 
Provides generators for common sensor values like gaussian random number for things like temperature
and power.

# Getting started
* Provide MQTT broker url in a .env file like this:
```
BROKER_URL=mqtt://localhost
```
By default it will try to connect to localhost

* Install dependencies
```
npm install
```

* Run
```
npm start
```

A `Dockerfile` has been provided to build a Docker image from this repository.
Also provided a `docker-compose.yml` file to quickly deploy and MQTT broker, a node-red server 
and this application by just running
```
docker-compose up -d --build
```

# Adding your own schema

All sensor definitions are specified in the `schema.js` file. By default, it creates 2 sensors, 
a temperature sensor and a power meter. To add a new sensor, just insert a new element in the `schema` 
array. It should have the following structure:
```
{
    topic: "TOPIC_NAME", //Replace with your sensor publish topic
    data: function () {
        // This function should return the data to be published at each interval. 
        // Use the generators to randomize values
        return {
            sensor_id: 'temp_room_1',
            TS: + new Date(),
            temperature: +generators.gaussianRand(25, 2).toFixed(2),
        }
    },
    interval: 10000 // Interval at which data is generated
},
```