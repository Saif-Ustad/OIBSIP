import "./SignInPage.scss";

import loginSideImg from "../../Assets/Images/pizza login side.jfif";
import Logo from "../../Assets/Images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//redux part
import {useDispatch} from "react-redux";
import { signIn } from "../../Action/AuthActions";

const SignInPage = () => {

    //redux part
    const dispatch = useDispatch();

    const [data, setData] = useState({email:"", password: ""})

    const handlechange = (e)=> {
        setData({...data, [e.target.name]:e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(signIn(data));
    }

    const Navigate = useNavigate();

    return (
        <div className="SignInPage">
            <div className="container">
                <div className="left">
                    <div ><img src={Logo} alt="logo" /></div>
                    <h1>Welcome Back</h1>
                    <p>Sign in with your email address and Password.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="inputField">
                            <h3>Email address</h3>
                            <input type="email" name="email" onChange={handlechange} placeholder="xyz@gmail.com" />
                        </div>
                        <div className="inputField">
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={handlechange} placeholder="keep private" />
                        </div>

                        <div className="CheckField">
                            <div className="checkbox">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <h6>Forgot Password?</h6>
                        </div>
                        <button type="submit" >Sign In</button>
                    </form>
                    <h5>Don't have an account?<span onClick={()=>Navigate("/auth/register")}> Sign Up</span></h5>

                </div>
                <div className="right">
                    <img src={loginSideImg} alt="login-page-img" />
                </div>
            </div>
        </div>
    );
}

export default SignInPage;