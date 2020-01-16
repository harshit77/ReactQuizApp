import React,{useState} from 'react';
import './Login.css';
function Login(props) {
const [username,setUsername]=useState('');
 function proceed() {
     props.message(username);
 }
    return (
        <div className="container">
        <label className="fullWidth">Username:<input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/> </label>
        <div className="proceed fullWidth"><button onClick={proceed} disabled={username ==='' ? 'disbaled' :''}>Proceed</button></div>
        </div>
    )  
}

export default Login;