var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/upload', function(req, res) {
  console.log("HERE!?")
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  debugger;
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('uploads/test.png', function(err) {
    if (err) {
      console.log('wtf: ', err);
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
});

module.exports = router;
