// Importar o model para dentro do controller
const Transportadora = require('../models/Transportadora')
 
const controller = {}   // Objeto vazio
 
// Método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    try{
        // Envia os dados dentro de req.body para o BD para criação
        await Transportadora.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){
        console.error(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}
 
// Método listar(), implementando a operação RETRIEVE (all)
controller.listar = async (req, res) => {
    try{
    //find() sem parâmetros é para trazer tudo 
    let dados = await Transportadora.find()
    res.send(dados)// Vai com status HTTP 200: OK
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
    }
}
 
// Método obterUm(), implementando a operação RETRIEVE (one)
controller.obterUm = async (req, res) => {
    const id = req.params.id    // Capturando o parâmetro id
    let obj = await Transportadora.findById(id)

    // Se o objeto vier preenchido (achou), então o retornamos
    if (obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP 404: Not found
    else res.status(404).end()
}

// Método atualizar(), implementado a operação UPDATE
controller.atualizar = async (req, res) => {
    try{
    // Isolar o id do objeto para fins de busca
    const id = req.body._id
    // Busca o objeto pelo id e, encontrando-o, substitui o conteúdo por req.body
    let obj = await Transportadora.findByIdAndUpdate(id, req.body)
 
    // Se encontrou e substituiu, retornamos HTTP 204: No content
    if(obj) res.status(204).end()
    // Caso contrário, retorna HTTP 404: Not found
    else res.status(404).end()
    }
    catch(erro){
        console.error(erro)
        res.status(500).end()
    }
} 

//Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try{
        // Isolando o id para exclusão
        const id = req.body._id
        let obj = await Transportadora.findByIdAndDelete(id)
        
        //Encontrou e excluiu
        if(obj) res.status(204).end()
        // Objeto não foi encontrado para a exclusão
        else res.status(404).end()
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller