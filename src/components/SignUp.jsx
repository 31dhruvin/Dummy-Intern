import React, { useState,useContext } from 'react'
//admin signup
import {Link} from "react-router-dom"
import {fire} from '../Firebase'
import swal from "sweetalert";
import UserStore from '../Store'

const SignUp = () => {
    const { userData, setUserData } = useContext(UserStore);
    const [loading, setLoading] = useState(false);

    const signUpHandler = async () => {
        setLoading(true);
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            setLoading(false);
            return;
          }
          try {
            const userCredentials = await fire
              .auth()
              .createUserWithEmailAndPassword(email, password);
      
            
            
            swal(
              "Please verify your email.",
              "A verification link has been sent to your registered email.",
              "success"
            );
            setLoading(false);
            setUserData({
              ...userData,
              auth: true,
              data: userCredentials.user,
            });
          } catch (error) {
            setLoading(false);
            swal(error.message, "", "error");
            console.log(error.message);
          }
        };
    
    return (
      <div>
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" className="tab">SignUp</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up" disabled/><label for="tab-2" className="tab"></label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label for="email" class="label">Email</label>
          <input id="email" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="password" className="label">Password</label>
          <input id="password" type="password" className="input" data-type="password"/>
        </div>

        <div className="signin">
        Already Registered?{" "}<Link className="signin" to="/login">Login</Link>
        </div>
        <div className="hr"></div>
        <div className="group">
          
          <button className="button" onClick={signUpHandler} type="submit" >SignUp{" "}
                    {loading ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : ""}                 
                    </button>
        </div>
        
      </div>
      </div>
      </div>
</div>
        </div>
        
    )
}

export default SignUp
