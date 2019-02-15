// server.js

const app = require('express')(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose')
  const config = require('./backend/DB');
  const checkRoute = require('./backend/routes/check.route');
  

  mongoose.Promise = global.Promise;
  mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

  const PORT = process.env.PORT || 4000;

  app.use(bodyParser.json());
  app.use(cors());

  app.use('/checks', checkRoute);

  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });