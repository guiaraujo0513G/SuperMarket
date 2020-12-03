var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.9o6be.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
var app = express();

const cors = require('cors'); 
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Nova rota para Fabricante
const fabricante = require('./routes/fabricante')
app.use('/fabricante', fabricante)

//Nova rota para Fornecedor
const fornecedor = require('./routes/fornecedor')
app.use('/fornecedor', fornecedor)

//Nova rota para Transportadora
const transportadora = require('./routes/transportadora')
app.use('/transportadora', transportadora)

//Nova rota para Produto
const produto = require('./routes/produto')
app.use('/produto', produto)

//Nova rota para Loja
const loja = require('./routes/loja')
app.use('/loja', loja)

module.exports = app;
