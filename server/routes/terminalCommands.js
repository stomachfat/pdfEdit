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

var convert = 'convert -density 300 uploads/test.pdf -quality 100 convertedToPng/test.png';
// var convert = '';

function main() {
  console.log('STARTED CONVERTING');

  const mainPromise = sh(convert).then(({ stdout }) => {
    for (let line of stdout.split('\n')) {
      debugger;
      console.log(`ls: ${line}`);

    }
    console.log('DONE CONVERTING');

    return;
  });

  return mainPromise;
}

module.exports = {
  convertPDF: main,
};
