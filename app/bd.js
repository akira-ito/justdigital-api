const mongoose = require('mongoose');
mongoose.Promise = require('bluebird') 
mongoose.connect(`mongodb://${process.env.DB_PORT}/${process.env.DB_NAME}`, { 
    useMongoClient: true, 
    promiseLibrary: require('bluebird') 
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  // we're connected!
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 