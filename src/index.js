import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<script>
function makeRequestWithUserGesture() {
  var promise = document.requestStorageAccess();
  promise.then(
    function () {
     alert("Yes");
    },
    function () {
          alert("No");
    }
  );
}
</script>
<button onclick="makeRequestWithUserGesture()">Play video</button>

ReactDOM.render(<App name="Stranger"/>, document.getElementById('root'));
