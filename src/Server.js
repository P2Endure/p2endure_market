const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./routes/DB');
const port = process.env.PORT || 4000;
const fs = require("fs")
const spawn = require('child_process').spawn;
const checkRoute = require('./routes/check.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use('/checks', checkRoute);

// create a GET route
app.get('/express_backend/:filename', (body, res) => {
  const f = body.params.filename;

  let child = spawn(
    'C:\\EnergyPlusV8-8-0\\EP-Launch.exe',
    [process.cwd()+"src/"+ f + ".idf"]
  );
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    });
    
  child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    });
    
  child.on('close', function (code) {
    console.log('child process exited with code ' + code);
    });
  res.send('EnergyPlus is running');
});

app.get('/upload/add', function (req, res){
  console.log('two')
  const text = fs.readFileSync('C:/Users/CivilSystems/P2Endure/p2endure_market/src/upload/add/Warszawa_phase2_bgtec_summermode.idf', 'utf8');
  res.send(text);
})

app.get('/upload', function (req, res){
  console.log('one')
  const text = fs.readFileSync('C:/Users/CivilSystems/P2Endure/p2endure_market/src/upload/Warszawa_primary_validated.idf', 'utf8');
  res.send(text);
})

app.post('/upload', function (req, res){
  console.log("three")
  fs.writeFile('C:/Users/CivilSystems/P2Endure/p2endure_market/src/upload/Warszawa_primary_validated_after.idf', req.body.text, 
    (err) => {
      if (err) throw err;
      console.log('file saved');
  res.send(true)});
})

app.post('/upload/add', function (req, res){
  console.log(req.body)
  fs.writeFile('C:/Users/CivilSystems/P2Endure/p2endure_market/src/upload/add/Warszawa_phase2_bgtec_summermode_after.idf', req.body.text, 
    (err) => {
      if (err) throw err;
      console.log('file saved');
  res.send(true)});
})

// default options
app.use(fileUpload());

/* app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  console.log(req.files)
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  fs.writeFile(__dirname + `/upload/${sampleFile.name}`, sampleFile.data,
    (err) => {
      if (err) throw err;
      console.log('file saved');
      res.json({
        success: true,
        name: sampleFile.name
      })
  })
});  */