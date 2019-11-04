var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//admin====================================================================
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var topTenRouter = require('./routes/top-ten');
var statisticRouter = require('./routes/statistic');
var customersRouter = require('./routes/customers-manage');
var shopManageRouter = require('./routes/shopping-manage');
var changeCustomerRouter = require('./routes/change-info-customer');
var changeProductRouter = require('./routes/change-product');
var orderManageRouter = require('./routes/order-manage');
var changeOrderRouter = require('./routes/change-info-order');
var addProductRouter = require('./routes/add-product');
var addAccountRouter = require('./routes/add-account');


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


//admin===================================================================

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/top-ten', topTenRouter);
app.use('/statistic', statisticRouter);
app.use('/customers-manage', customersRouter);
app.use('/shopping-manage', shopManageRouter);
app.use('/change-info-customer', changeCustomerRouter);
app.use('/change-product', changeProductRouter);
app.use('/order-manage', orderManageRouter);
app.use('/change-info-order', changeOrderRouter);
app.use('/add-product', addProductRouter);
app.use('/add-account', addAccountRouter);

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
