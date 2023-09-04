import AdminNavbar from "../../components/AdminAllOrdersPage/AdminNavbar/AdminNavbar";
import AdminHomePage from "../../components/AdminHomePage/AdminHomePage";

import "./AdminHome.scss";

const AdminHome = () => {
    return (
        <div className="AdminHome" >
            <AdminNavbar />
            <AdminHomePage />
        </div>
        
    );
}

export default AdminHome;