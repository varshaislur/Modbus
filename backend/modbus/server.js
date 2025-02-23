const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();


client.connectRTUBuffered("COM15", { baudRate: 9600 })
    .then(() => {
        console.log("Connected to Modbus RTU Device");
        client.setID(13);
        return client.readInputRegisters(0, 5);
    })
    .then(data => {
        console.log("Register Data:", data.data);
    })
    .catch(console.error);
