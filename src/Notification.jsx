import React from 'react';

function Notification({message}) {
return (
    <div className={message ? "correct": "incorrect"}>
    {message ? "Correct": "InCorrect"}
    </div>
); 
}
export default Notification;