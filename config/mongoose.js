const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/tODO_list-db');
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we' re connected to mongodb
  console.log('succefully connected to database');
});