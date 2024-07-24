const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors'); // Importa el módulo http-errors

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site

const app = express();
const mongoose = require("mongoose");

// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/local_library"; //"mongodb://localhost:27017/local_library"

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// Ruta para manejar favicon.ico y evitar error 404
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(function(req, res, next){
    next(createError(404));
});

module.exports = app;

// mongoose.set("strictQuery", false);
// const mongoDB = "mongodb://127.0.0.1/locallibrary";

/*
app.use('/users/cool', function(req, res, next){
    res.status(200).send("You are so cool");
    });
*/
