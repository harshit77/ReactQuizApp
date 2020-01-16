import React from 'react';

function QuizHeader({name,progress}) {
return (
<header>
    <div className="userName">
       <span className="usernameIndicator"></span>{name.toUpperCase()}
    </div>
    <div>
        <div>Total Test Completed </div>
        <div><progress value={progress}></progress></div>
    </div>
</header>
);
}

export default QuizHeader;