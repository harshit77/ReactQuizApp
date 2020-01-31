import React from 'react';
import Quiz from './Quiz';
import './App.css';

function App({name}) {
function makeRequestWithUserGesture() {
  const promise = document.requestStorageAccess();
	console.log("cdsavc h",promise);
  promise.then(
    function () {
     alert("Yes");
    },
    function () {
          alert("No");
    }
  );
}
  return (
    <main>
	  <button onclick={makeRequestWithUserGesture}>Play video</button>
	<h1>Quiz App</h1>
	<p>Hello {name} We have built this quiz app demo on React Hope you will like it for more info  Visit the <a href="https://reactjs.org/">React tutorial</a> to learn how to build React apps. and compare it with Svelte app <a href="https://sveltequizapp.netlify.com/">Svelte App </a> also.</p>
	<Quiz/>
</main>
  );
}

export default App;


