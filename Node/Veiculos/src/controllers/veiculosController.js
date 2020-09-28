const mongoose = require('mongoose');
const Veiculos = mongoose.model('Veiculos');

// list
exports.listVeiculos = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
      const data = await Veiculos.find({});
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar os veiculos.'});
    }
  };

  // create
exports.createVeiculo = async (req, res) => {
    try {
      const veiculo = new Veiculos({
        id: req.body.id,
        modelo: req.body.modelo,
        anoModelo: req.body.anoModelo,
        anoFabricacao: req.body.anoFabricacao,
        marca: req.body.marca,
        fipe: req.body.fipe
      });
  
      console.log(veiculo)
  
      await veiculo.save();
  
      res.status(201).send({message: 'Veiculo cadastrado com sucesso!'});
    } catch (e) {
      res.status(500).send({message: 'Falha ao cadastrar o veiculo.'});
    }
  };

  //delete
  exports.deleteVeiculo = async (req, res, next) => {
    let id = req.params.id;
     await Veiculos.deleteOne({_id: id}, (err) => {
		//Retornar erro quando não conseguir apagar no banco de dados
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Veiculo não foi apagado com sucesso!"
        });
        return res.json({
            error: false,
            message: "Veiculo apagado com sucesso!"
        });
    })};

    exports.getVeiculoFipe = async (req, res, next) => {
        let fipe = req.params.fipe;
        const data = await Veiculos.find({'fipe' : fipe});
        res.status(200).send(data);
        };
       


