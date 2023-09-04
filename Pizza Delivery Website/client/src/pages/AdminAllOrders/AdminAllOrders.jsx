import AdminAllOrdersPage from "../../components/AdminAllOrdersPage/AdminAllOrdersPage";
import AdminNavbar from "../../components/AdminAllOrdersPage/AdminNavbar/AdminNavbar";

import "./AdminAllOrders.scss";

const AdminAllOrders = () => {
    return (
        <div className="AdminAllOrders" >
            <AdminNavbar />
            <AdminAllOrdersPage />
        </div>
        
    );
}

export default AdminAllOrders;