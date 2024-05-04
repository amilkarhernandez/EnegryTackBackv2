const express = require("express");
const consumoController = require("../controllers/consumosController");

const api = express.Router();

api.post("/consumos/nuevos", consumoController.create);
api.get("/consumos/listar", consumoController.findAll);

module.exports = api;
