// var serverless = require('serverless-http');
var express = require('express');
var app = express();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');



const fileUpload = require('express-fileupload');
app.use(fileUpload());
const fileUploaderRoute = require('./routes/fileUpload');
app.use(fileUploaderRoute);
// default options

// app.post('/upload', function(req, res) {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   let sampleFile = req.files.sampleFile;
//   console.log('sampleFile', sampleFile);
//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('uploads/test.png', function(err) {
//     if (err) {
//       console.log('wtf - err: ', err);
//       return res.status(500).send(err);
//     }

//     res.send('File uploaded!');
//   });
// });

debugger;
var terminalCommands = require('./routes/terminalCommands');

// view engine setup
app.set('views', path.join(__dirname, '../public/'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return;
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
