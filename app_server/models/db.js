const mongoose = require('mongoose');
let MONGODB_URI = "mongodb://localhost/poey";
if (process.env.NODE_ENV === 'production') {
 MONGODB_URI = "mongodb+srv://joselorenzocarrero:Yz7lldpTSOWkNieO@cluster0.2ycjt.mongodb.net/poey?retryWrites=true&w=majority";
}
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
/*mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/poey',
  {
    useNewUrlParser: true,    
  },
);*/
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to app server:` + MONGODB_URI);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
};
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('app shutdown', () => {
      process.exit(0);
    });
});
require('./vientos');

