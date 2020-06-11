const generators = require('./generators')
const schema = [
    {
        topic: 'SENSOR/THI/TEMPERATURE/temp_k_seil',
        data: function () {
            return {
                sensor_id: 'temp_k_seil',
                TS: + new Date(),
                temperature: +generators.gaussianRand(25, 2).toFixed(2),
            }
        },
        interval: 10000
    },
    {
        topic: 'SENSOR/POWER/power_k_seil_a',
        data: function () {
            return {
                sensor_id: 'power_k_seil_a',
                TS: + new Date(),
                W: generators.gaussianRand(1000, 50),
                V: generators.gaussianRand(240, 5),
                A: generators.gaussianRand(5, 1),
            }
        },
        interval: 1000
    }
]
module.exports = schema;