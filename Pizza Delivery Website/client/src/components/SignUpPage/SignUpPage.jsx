import "./SignUpPage.scss";

import loginSideImg from "../../Assets/Images/pizza login side.jfif";
import Logo from "../../Assets/Images/logo.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

//redux part
import {useDispatch} from "react-redux";
import { signUp } from "../../Action/AuthActions";

const SignUpPage = () => {

    //redux part
    const dispatch = useDispatch();


    const [data, setData] = useState({firstname:"", lastname:"", email:"", password: "", confirmpassword:""})

    const handlechange = (e)=> {
        setData({...data, [e.target.name]:e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        data.password === data.confirmpassword? dispatch(signUp(data)): console.log("both password fields should match");
    }

    const Navigate = useNavigate();

    return (
        <div className="SignUpPage">
            <div className="container">
                <div className="left">
                    <div><img src={Logo} alt="logo" /></div>
                    <h1>Welcome Back</h1>
                    <p>Sign in with your email address and Password.</p>
                    <form onSubmit={handleSubmit} >
                        <div className="inputField nameField">
                            <div>
                                <h3>First Name</h3>
                                <input type="text" name="firstname" onChange={handlechange} placeholder="xyz" style={{ "text-transform": "capitalize" }} />
                            </div>
                            <div>
                                <h3>Last Name</h3>
                                <input type="text" name="lastname" onChange={handlechange} placeholder="abc" style={{ "text-transform": "capitalize" }} />
                            </div>
                        </div>
                        <div className="inputField">
                            <h3>Email address</h3>
                            <input type="email" name="email" onChange={handlechange} placeholder="xyz@gmail.com" />
                        </div>
                        <div className="inputField">
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={handlechange} placeholder="keep private" />
                        </div>
                        <div className="inputField">
                            <h3>Confirm Password</h3>
                            <input type="password" name="confirmpassword" onChange={handlechange} placeholder="keep private" />
                        </div>

                        <div className="CheckField">
                            <div className="checkbox">
                                <input type="checkbox" />
                                <span>Remember me</span>

                                {/* //comment 3 line below*/}
                                {/* <div className="error-message" style={{ display: false ? "none" : "block", color: "red", position: "absolute", left: "230px", bottom: "190px" }}>
                                    <h4>* Confirm password is not same</h4>
                                </div> */}
                                
                            </div>
                            <h6>Forgot Password?</h6>
                        </div>
                        {/* <button type="submit" onClick={() => Navigate("/")}>Sign Up</button> */}
                        <button type="submit">Sign Up</button>
                    </form>
                    <h5>Already have an account?<span onClick={() => Navigate("/auth/login")}> Sign In</span></h5>

                </div>
                <div className="right">
                    <img src={loginSideImg} alt="login-page-img" />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;