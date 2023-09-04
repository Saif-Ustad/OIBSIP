import "./AdminNavbar.scss";

import Logo from "../../../Assets/Images/logo.png";
import { FaUserCircle } from "react-icons/fa";

import {useNavigate} from "react-router-dom";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Action/AuthActions";

const AdminNavbar = () => {

    const Navigate = useNavigate();

    const user = useSelector((state)=>state.authReducer.authData);
    const dispatch = useDispatch();

    
    const handleLogout = (e) => {
        dispatch(logout());
        Navigate("/auth/login");
    }

    

    return (
        <div className="navbar-section">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul className="navbar-links">
                        <li onClick={()=>Navigate("/")}>HOME</li>
                        <li onClick={()=>Navigate("/admin/orders")}>All ORDERS</li>
                    </ul>
                </div>
                <div className="right">
                    <span className="logout-btn" onClick={handleLogout} style={{display: user? "block": "none"}}>LOGOUT</span>
                    <FaUserCircle onClick={()=>Navigate("/auth/login")}/>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;