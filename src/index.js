import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
function makeRequestWithUserGesture() {
  const promise = document.requestStorageAccess();
  promise.then(
    function () {
     alert("Yes");
    },
    function () {
          alert("No");
    }
  );
}
<button onclick="makeRequestWithUserGesture()">Play video</button>

ReactDOM.render(<App name="Stranger"/>, document.getElementById('root'));
