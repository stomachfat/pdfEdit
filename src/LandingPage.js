import React from 'react';

const LandingPage = ({ done }) => (
    <div>
        <div>
            <input type="button" id="load-file-btn" value="Upload a PDF" onClick={() => document.getElementById('file-input').click()} />
            <input id="file-input" type="file" onChange={done}></input>
        </div>
    </div>
);

export default LandingPage;
