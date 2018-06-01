var express = require('express');
var router = express.Router();

var convertPngToPdf = require('./terminalCommands').convertPngToPdf;

/* GET users listing. */
router.post('/convertPngToPdf', function(req, res) {
  console.log("HERE!? router.post('/convertPngToPdf")
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
  sampleFile.mv('uploads/test.png', function(err) {
    if (err) {
      console.log('wtf: ', err);
      return res.status(500).send(err);
    }

    convertPngToPdf().then(() => {
      console.log("holy shit convertPngToPdf worked!");
      return res.status(200).send();
    })

  });
});

module.exports = router;
