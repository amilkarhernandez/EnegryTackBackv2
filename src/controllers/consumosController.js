const consumoModel = require("../models/consumosModel");
const {
  createConsumo,
  findAllConsumos,
  obtenerDatosDiarios,
} = require("../repository/consumosRepository");

// Controlador para guardar los datos del arduino
async function create(req, res) {
  const { consumo_energetico, fecha } = req.body;
  // Crear una nueva instancia del modelo ConsumoModel
  const nuevoConsumo = new consumoModel({
    consumo_energetico,
    fecha,
  });

  // Guardar los datos en la base de datos
  await nuevoConsumo.save();

  const response = await createConsumo(nuevoConsumo);
  res.status(response.status).send(response);
}

// Controlador para obtener los datos diarios para una fecha específica
async function consumosDiarios(req, res) {
  const { fecha } = req.params; // Obtenemos la fecha del parámetro de la URL

  const response = await obtenerDatosDiarios(fecha);
  res.status(response.status).send(response);
}

// Controlador para encontrar todos los consumos del día
async function findAll(req, res) {
  const response = await findAllConsumos();
  res.status(response.status).send(response);
}

module.exports = {
  create,
  findAll,
  consumosDiarios,
};
