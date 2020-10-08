const mongoose = require('mongoose')
const esquema = mongoose.Schema({
    numero_franquia: {
        type: String,
        required: true,  // Atributo obrigatório
        index: { unique: true}
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    produto: [{
        type: mongoose.ObjectId,
        ref: 'Produto',
        required: true
    }]
})
// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Loja', esquema, 'lojas1')