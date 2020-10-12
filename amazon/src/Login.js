import React,{useState} from 'react';
import "./Login.css";
import {Link,useHistory} from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const login=(event)=>{
        event.preventDefault();  //this   state stops refresh
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //loged in,redirect to homepage
                history.push("/");
            })
            .catch((e)=>alert(e.message));
    };

    const register=(event)=>{
        event.preventDefault();  //this state stops refresh

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                //created a user and logged in
                history.push("/");
            })
            .catch((e)=> alert(e.message));

    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="amazonlogo"
                />
            </Link>

                <div className="login_container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>E-mail</h5>
                            <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                        <h5>Password</h5>
                            <input value={password} onChange={event=>setPassword(event.target.value)} type="text"/>
                            <button onClick={login} type="submit" className="login_signin_button">Sign in</button>
                    </form>
                    <p>
                        By signing in u accept the terms and conditions of our privacy policy
                    </p>
                    <button onClick={register} className="login_register_button">Create an account</button>
                </div>


        </div>
    );
}

export default Login; 
