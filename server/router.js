const auth = require('./controller/auth').signup;

module.exports = app => {
  app.post('/signup', auth); 
};
