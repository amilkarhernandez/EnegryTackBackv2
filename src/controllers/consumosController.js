const consumoModel = require("../models/consumosModel");
const {
  createConsumo,
  findAllConsumos,
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
// Controlador para encontrar todos consumo
async function findAll(req, res) {
  const response = await findAllConsumos();
  res.status(response.status).send(response);
}
module.exports = {
  create,
  findAll,
};
