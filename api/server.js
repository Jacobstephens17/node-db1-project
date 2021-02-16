const express = require("express");

const AccountRouter = require("./accounts/accounts-router");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/api/accounts", AccountRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "Working" })
})

module.exports = server;