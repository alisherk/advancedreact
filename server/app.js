const express = require('express');
const morgan = require('morgan'); 
const router = require('./router');
const mongoose = require('mongoose');

//app set up 
const app = express(); 
app.use(morgan('combined')); 
app.use(express.json());

//routes set up
router(app);

//mongo set up
mongoose.connect(require('./config/dev').mongoURI, { useNewUrlParser: true, useCreateIndex: true  });
const db = mongoose.connection; 
db.once('open', () => {
  console.log('db is open')
}); 

//server set up
const port = process.env.PORT || 4000; 
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
