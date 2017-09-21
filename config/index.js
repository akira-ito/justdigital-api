const path = require('path'),
    dotenv = require('dotenv');
    
if (process.env.NODE_ENV == 'test')
    dotenv.config({path: path.resolve(__dirname, '.env.test')});
else if (process.env.NODE_ENV == 'development')
    dotenv.config({path: path.resolve(__dirname, '.env')});
else if (process.env.NODE_ENV == 'production')
    dotenv.config({path: path.resolve(__dirname, '.env.production')});
else
    dotenv.config({path: path.resolve(__dirname, '.env')});