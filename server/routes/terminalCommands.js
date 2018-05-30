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

var convert = ''; //'convert -density 300 EDD.pdf -quality 100 EDD.png';

function main() {
  sh(convert).then(({ stdout }) => {
    for (let line of stdout.split('\n')) {
      debugger;
      console.log(`ls: ${line}`);
    }
  });

}

main();

module.exports = {};
