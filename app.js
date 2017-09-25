const config = require('./config'),
    express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    authenticate = require('./app/routes/authenticate'),
    Routes = require('./app/routes/index'),
    helmet = require("helmet"),
    cors = require("cors"),
    compression = require("compression")
    bd = require('./app/bd');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));
if (process.env.NODE_ENV=='development')
    app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('jwt-auth', process.env.JWT_AUTH);

app.use(helmet());  
app.use(cors({  
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(compression());

app.use('/authenticate', authenticate)
app.use('/v1/api', Routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 400;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json(res.locals);
});

module.exports = app;
