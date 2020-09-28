const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
const schema = new Schema({
      id: {
        type: ObjectId
      },
      modelo: {
        type: String,
        required: true,
        trim:true
      },
      anoModelo: {
        type: Number,
        required: true
      },
      anoFabricacao: {
        type: Number,
        required: true
      },
      marca: {
        type: String,
        required: true,
        trim:true
      },
      fipe: {
        type: String,
        required: true
      }
  });
  
  module.exports = mongoose.model('Veiculos', schema);