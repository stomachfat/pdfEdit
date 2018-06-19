var express = require('express');

var app = express();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var onHeaders = require('on-headers')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Define Routes
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const fileUploaderRoute = require('./routes/fileUpload');
app.use(fileUploaderRoute);
const convertPngToPdfRoute = require('./routes/convertPngToPdf');
app.use(convertPngToPdfRoute);

var payment = require('./routes/payment');
app.use(payment);

// view engine setup
app.set('views', path.join(__dirname, '../public/'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());



function unsetCacheHeaders() {
  this.removeHeader('Etag')
  this.removeHeader('Last-Modified')
  // this.removeHeader('Cache-Control')
}

function nonCachedpublicAssets(path) {
  if (typeof path !== 'string') {
    return false;
  }

  return path.includes('bundle.js') || path.includes('index.html');
}

// Solution on https://github.com/expressjs/express/issues/2326
// to modify static content so that it doesn't have a 'Last-Modified'
// in the header
app.use(express.static(path.join(__dirname, '../public'), {
  setHeaders: function (res, path) {
    // no etag or last-modified for nonCachedpublicAssets
    if (nonCachedpublicAssets(path)) {
      onHeaders(res, unsetCacheHeaders)
    }
  },
}));
app.use('/images', express.static(path.join(__dirname, '../convertedToPng')));
app.use('/pdfs', express.static(path.join(__dirname, '../convertedToPdf')));





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



// Constants
var PORT = 3000;
// var HOST = '0.0.0.0';
// app.listen(PORT, HOST);
var port_number = app.listen(process.env.PORT || PORT);
app.listen(port_number);
console.log(`Running on PORT: ${PORT}`);
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

module.exports = app;
