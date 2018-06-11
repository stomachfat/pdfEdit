// import { exec } from 'child_process';
var exec = require('child_process').exec;

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}


var convertPDFToPngTerminalCommand = 'convert -density 300 uploads/test.pdf -quality 100 -flatten convertedToPng/test.png';
var convertPngToPdfTerminalCommand = 'convert -density 300 uploads/test.png -quality 100 convertedToPdf/test.pdf'

function main(terminalCommand) {
  console.log('STARTED CONVERTING');

  const mainPromise = sh(terminalCommand).then(({ stdout }) => {
    for (let line of stdout.split('\n')) {
      console.log(`ls: ${line}`);

    }
    console.log('DONE CONVERTING');

    return true;
  });

  return mainPromise;
}

function convertPDFToPng() {
  return main(convertPDFToPngTerminalCommand);
}

function convertPngToPdf() {
  return main(convertPngToPdfTerminalCommand);
}


module.exports = {
  convertPDFToPng: convertPDFToPng,
  convertPngToPdf: convertPngToPdf,
};
