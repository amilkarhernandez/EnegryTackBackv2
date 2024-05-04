const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListaConsumosSchema = schema({
  consumo_energetico: Number,
  fecha: Date,
});

module.exports = mongoose.model("consumos_collection", ListaConsumosSchema);
