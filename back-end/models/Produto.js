const mongoose = require('mongoose')
const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true,  // Atributo obrigatório
        index: { unique: true}
    },
    qtde: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    fabricante:{
        type: mongoose.ObjectId,
        ref: 'Fabricante',
        required: true
    },
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor',
        required: true
    },
    transportadora: {
        type: mongoose.ObjectId,
        ref: 'Transportadora',
        required: true
    }
})
// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Produto', esquema, 'produtos1')