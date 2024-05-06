const express = require("express");
const consumoController = require("../controllers/consumosController");

const api = express.Router();

api.post("/consumos/nuevos", consumoController.create);
api.get("/consumos/listar", consumoController.findAll);
api.get("/consumos/diarios/:fecha", consumoController.consumosDiarios);

module.exports = api;
