const mongoose =require ('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/TiendaOnline';


mongoose.connect(MONGO_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,

})
  .then(() => {
    console.log('Connected to MongoDB Server..');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

 