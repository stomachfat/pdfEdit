var express = require('express');
var router = express.Router();

var convertPDF = require('./terminalCommands').convertPDF;

/* GET users listing. */
router.post('/upload', function(req, res) {
  console.log("HERE!? router.post('/upload")
  if (!req.files) {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    console.log('req.files: ', req.files);

    return res.status(400).send('No files were uploaded.');
  }

  console.log('we have req.files!?: ', req.files);

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('uploads/test.pdf', function(err) {
    if (err) {
      console.log('wtf: ', err);
      return res.status(500).send(err);
    }

    convertPDF().then(() => {
      console.log("holy shit convertPDF worked!");
      return res.status(200).send();
    })

  });
});

module.exports = router;
