const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.get('/', veiculosController.listVeiculos);
router.post('/', veiculosController.createVeiculo);
router.delete('/:id', veiculosController.deleteVeiculo);
router.get('/:fipe', veiculosController.getVeiculoFipe);

module.exports = router;