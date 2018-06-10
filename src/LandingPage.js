import React from 'react';
import Dropzone from 'react-dropzone';

import './LandingPage.css';

const saveToServer = file => {
  // debugger;
  // let data = new FormData();
  // data.append('file', file);
  // // data.append('action', 'upload');
  // // data.append('encType', 'multipart/form-data');
  // // data.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');

  // let config = {
  //   headers: {
  //     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  //   },
  //   // onUploadProgress: function(progressEvent) {
  //   //   var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
  //   //   console.log('onUploadProgress: ', percentCompleted);
  //   // }
  // };

  // axios.post('/upload', data, config)
  //   .then(res => {
  //     debugger;
  //   });





  // Connection: keep-alive
  // Content-Length: 278091
  // Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryvN36AsH3J1BY3NWC
  // Cookie: SL_C_23361dd035530_VID=pVFOwy0T4Tru; SL_C_23361dd035530_KEY=101120913b4b1bf943c472cc08780a7d65ae598c; _ga=GA1.1.1468836347.1526220057; SL_C_23361dd035530_SID=TcUixpkVGKrY; csrftoken=u0QoAuGdtKDFbwWfB7TjrtgAUKb20y1JFw2y1nfZX06XYpmKMOTjDa5YHa5B3hBa; ajs_anonymous_id=%22e1cc6772-bf85-469b-b062-9f58feb46d49%22; ajs_user_id=3; amplitude_id_807ad6dda340028d2451436d1b286c77=eyJkZXZpY2VJZCI6ImQ5MzlhNTc3LWFkOTAtNDczNS1hM2E2LTY1OTUxMjIzMzVlY1IiLCJ1c2VySWQiOiIzIiwib3B0T3V0IjpmYWxzZSwic2Vzc2lvbklkIjoxNTI2MzMwODc1MjEzLCJsYXN0RXZlbnRUaW1lIjoxNTI2MzMyODI2MjgwLCJldmVudElkIjo2OSwiaWRlbnRpZnlJZCI6ODgsInNlcXVlbmNlTnVtYmVyIjoxNTd9
  // Host: localhost:8000
  // Origin: http://localhost:8000
  // Referer: http://localhost:8000/

  // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36

  let data = new FormData();
  data.append('file', file);

  fetch('/upload', { // Your POST endpoint
    method: 'POST',
    // headers: {
    //   "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
    //   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //   'Accept-Encoding': 'gzip, deflate, br',
    //   'Accept-Language': 'en-US,en;q=0.9',
    //   'Cache-Control': 'max-age=0',
    //   'Upgrade-Insecure-Requests': '1',
    // },
    body: data,
  }).then(response => {
  });
}

const onDrop = done => (acceptedFiles, rejectedFiles, event) => {
  const file = acceptedFiles[0];

  saveToServer(file);
  done();
};

const onClick = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();

  document.getElementById('file-input').click();
};



const LandingPage = ({ done }) => {
  return (
    <div>
      <Dropzone
        onDrop={onDrop(done)}
        // onClick={() => {}}
        // disableClick
      >
          <div>
              <div
                className="dropFileText"
              >
                  Drop a one-page PDF here!
              </div>

              <div>
                <input type="button" id="load-file-btn" value="Upload a PDF"/>
                <input id="file-input" type="file"></input>
              </div>
          </div>
      </Dropzone>
    </div>
  );
};

export default LandingPage;
