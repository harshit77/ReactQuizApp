import React,{useState,useEffect} from 'react';
import {htmlDecode,shuffles} from './utlis.js';
import QuizHeader from './QuizHeader.jsx';
import Notification from './Notification.jsx';
import Login from './Login.jsx';

function Quiz() {
 const [questionNo,setQuestionNo]=useState(0);
 const [loginScreen,setLoginScreen]=useState(true);
 const [username,setUsername]=useState('');
 const [optionSelected,setOptionSelected]=useState('');
 const [progress,setProgress]=useState(0);
 const [score,setscore]=useState(0);
 const [notficationBox,setNotficationBox]=useState(false);
 const [notficationMessage,setNotficationMessage]=useState(false);
 const [userResponses,setUserResponses]=useState([]);
 const [resultScreen,setResultScreen]=useState(false);

function quizUsername(loginName) {
    setUsername(loginName);
    setLoginScreen(false)
}
 
 const FAKE_DATA=[{
id: "0",
question: "Which letter of the alphabet has the most water?",
correct_answer : "C",
incorrect_answers : ['A', 'B', 'C']
},
{
id: "1",
question: "What kind of dog keeps the best time?",
correct_answer: "Watchdog",
incorrect_answers: ['Watchdog', 'hotdog', 'Cutedog']
}];

useEffect(() => {
    async function fetchData() {
//         const response= await fetch('https://www.json-generator.com/api/json/get/cftWfSJxAi?indent=2');
//         const result= await response.json();
//        const  data=result.results;
       const userResponses=FAKE_DATA.map(userResponse=> {
            return {
            question:htmlDecode(userResponse.question),
            correctAnswer:userResponse.correct_answer,
            answerChocies: shuffles([...userResponse.incorrect_answers,userResponse.correct_answer].map(ans=>htmlDecode(ans))),
            category:userResponse.category,
            difficulty: userResponse.difficulty,
            answerByUser:'',
            correct:false,    
            answered:false,
            }
        })
        setUserResponses(userResponses);
    } 
    fetchData();
}, []);
    



function handleClick(e) {
    let userResponseCopy= {...userResponses[questionNo]};
    if(e.target.value===userResponses[questionNo].correctAnswer) {
        userResponseCopy.correct=true;
        userResponseCopy.answered=true;
        userResponseCopy.answerByUser=userResponses[questionNo].correctAnswer;
        userResponses[questionNo]=userResponseCopy;
        setscore(score +1);
        setNotficationMessage(true)
    }
    else {
        userResponseCopy.correct=false;
        userResponseCopy.answered=true;
        userResponseCopy.answerByUser=e.target.value;
        userResponses[questionNo]=userResponseCopy;
        setNotficationMessage(false)
    }
    if(!notficationBox) setNotficationBox(true);
    setOptionSelected(e.target.value);
}
function handleButtonOperation(e) {
    setOptionSelected('');
    if(notficationBox) setNotficationBox(!notficationBox);
    setProgress((questionNo+1)/userResponses.length);
    // progress.set((questionNo+1)/userResponses.length);
    if(userResponses.length>questionNo+1) setQuestionNo(questionNo +1);
    else setResultScreen(true);

}
function handleRetake() {
    window.location.href="/";
}


return(
    <div className="container">
   {loginScreen && 
    <Login message={quizUsername}/>
   }
  {!loginScreen && userResponses.length!==0 && !resultScreen &&
        <>
        <QuizHeader name={username} progress={progress}/>
        <div className="questionNo">
            <div className="questionText">Question {questionNo+1}</div>
            <div className="questionDifficulty">{userResponses[questionNo].difficulty}</div>
            </div>
        <div><span className="category">Category:</span> {userResponses[questionNo].category}</div>
        <div>{userResponses[questionNo].question}</div>
        {userResponses[questionNo].answerChocies.map((answerChoice,index) => {
            return (
                <label key={index} className="choice"><input type="radio" name="choice"  value={answerChoice} checked={ optionSelected=== answerChoice} onChange={handleClick}/>{answerChoice}</label>
            )
        })}
            <div>
                <div className="nextAction">  
                 {notficationBox &&
                    <Notification message={notficationMessage}></Notification>
                  }
                </div>
                <button  onClick={handleButtonOperation}>Next</button>
            </div>
            </>
  }
              {resultScreen && 
                <>
            <div className="resultScreen">You're Score is </div>
            <div className="score">{score} / 10 </div>
            <div className="retake">  <button  onClick={handleRetake}>ReTake</button> </div>
            </>
        }
       
            {userResponses.length===0 &&  <h1>Fetching Questions....</h1>}
       


</div>
);
}

export default Quiz;
