var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//client
var indexRouter = require('./routes/client/index');
var homeRouter = require('./routes/client/home');
var shopRouter = require('./routes/client/shop');
var productRouter = require('./routes/client/product');
var cartRouter = require('./routes/client/cart');
var accountRouter = require('./routes/client/account');
var accountSettingRouter = require('./routes/client/account-setting');
var buyRouter = require('./routes/client/buy');
var purchaseHistoryRouter = require('./routes/client/purchase-history');

//=========================================================================

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/shop', shopRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/account', accountRouter);
app.use('/account-setting', accountSettingRouter);
app.use('/buy', buyRouter);
app.use('/purchase-history', purchaseHistoryRouter);


//=========================================================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
