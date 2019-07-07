var createError = require('http-errors');
var expressVue = require("express-vue");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const vueOptions = {
  rootPath: path.join(__dirname, './views'),
  head: {
    title: 'Express vue ',
    metas: [{
        name: 'express-vue',
        content: 'This is an express vue boilarplate'
      },
      {
        name: 'description',
        content: 'This is an express vue boilarplate'
      },
      {
        name: 'theme-color',
        content: '#2F3BA2'
      },
      {
        name: 'viewport',
        content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes'
      },
      // ...
      // Rel
      {
        rel: 'manifest',
        href: './manifest.json'
      }
      // Generic rel for things like icons and stuff
    ],
    scripts: [
      { src: './javascripts/main.js' },
    ],
    styles: []
  }
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;