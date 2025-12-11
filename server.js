// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const ping = require("ping");
const devices = require("./devices");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let logs = [];

// Cek device tiap 2 detik
setInterval(async () => {
  for (let device of devices) {
    const result = await ping.promise.probe(device.ip);

    device.status = result.alive ? "online" : "offline";
    device.latency = result.time;

    // Bandwidth tetap simulasi → karena HP dan Laptop tidak expose BW SNMP
    device.bandwidth = Math.floor(Math.random() * 50 + 10);

    const logMsg = `[${new Date().toLocaleTimeString()}] ${device.name} is ${device.status}`;
    logs.push(logMsg);
    if (logs.length > 30) logs.shift();
  }

  io.emit("update", devices);
  io.emit("log", logs);

}, 2000);

server.listen(3000, () => {
  console.log("Monitoring berjalan di http://localhost:3000");
});
