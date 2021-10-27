import React, { useState,useContext, useEffect } from 'react'
//admin login
import {Link,Redirect} from 'react-router-dom'
import {fire} from '../Firebase'
import swal from "sweetalert";
import UserStore from '../Store'
const Login = () => {
    const {userData,setUserData} = useContext(UserStore)
    const{email,password} = userData
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
      const onRefresh = JSON.parse(localStorage.getItem("user-info"));
      loginhandler(onRefresh)
    },[email,password])
    const LocalStorage = (props) =>{
      localStorage.setItem("user-info",JSON.stringify(props))
    }
    
    const loginhandler= async () => {
        setLoading(true)
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        // const userInfo = (email,password)
        console.log(email,password)
        
        if(!email || !password){
            setLoading(false)
            return;
        }
        try{
            const userCredentials = await fire.auth().signInWithEmailAndPassword(email, password)
            LocalStorage(userCredentials)             
            console.log(userCredentials.user) 
            setLoading(false)
            setUserData({
                ...userData,
                auth:true,
                data:userCredentials.user
            })
        }
        catch(error){
            setLoading(false)
            swal(error.message, "", "error");
            console.log(error.message)
        }
    }
    // const {currentUser} = useContext(AuthContext)
    // if (currentUser) {
    //   return <Redirect to="/home" />;
    // }
    
  
    return ( 
<div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" className="tab">Login</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up" disabled/><label for="tab-2" className="tab"></label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label for="emai;" class="label">Email</label>
          <input id="email" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="password" className="label">Password</label>
          <input id="password" type="password" className="input" data-type="password"/>
        </div>
        <div className="signin">
        <Link className="signin" to="/reset">Forgot password?</Link>
        </div>
        <br />
        <div className="signin">
        <Link className="signin" to="/signup">Sign Up?</Link>
        </div>
        <div className="hr"></div>
        <div className="group">
          
          <button className="button" onClick={loginhandler} type="submit" >Login{" "}
                    {loading ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : ""}                 
                    </button>
        </div>
        
      </div>
      </div>
      </div>
</div>
    )}
export default Login
