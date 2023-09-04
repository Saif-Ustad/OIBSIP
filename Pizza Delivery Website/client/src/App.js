import './App.scss';
import AdminAllOrders from './pages/AdminAllOrders/AdminAllOrders';
import AdminHome from './pages/AdminHome/AdminHome';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import Product from './pages/Product/Product';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const user = useSelector((state) => state.authReducer.authData);
  const adminCheck = useSelector((state) => state.authReducer.isAdmin);
  console.log(adminCheck)

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/"
          element={
            user ? (
              adminCheck ? (
                <Navigate to="admin" />
              ) : (
                <Home />
              )
            ) : (
              <SignIn />
            )
          }
        >
        </Route>
        <Route path="/auth/login"
          element={
            user ? (
              adminCheck ? (
                <Navigate to="../../admin" />
              ) : (
                <Navigate to="../../" />
              )
            ) : (
              <SignIn />
            )
          }
        >
        </Route>

        <Route path="/auth/register"
          element={
            user ? (
              adminCheck ? (
                <Navigate to="../../admin" />
              ) : (
                <Navigate to="../../" />
              )
            ) : (
              <SignUp />
            )
          }
        >
        </Route>
        <Route path="/cart/:userId" element={<Cart />}></Route>
        <Route path="/orders/:userId" element={<Orders />}></Route>
        <Route path="/orders/:userId/track/:orderId" element={<TrackOrder />}></Route>
        <Route path="/products/:productId" element={<Product />}></Route>
        <Route path="/admin/orders" 
          element={
            user ? (
              adminCheck ? (
                <AdminAllOrders />
              ) : (
                <SignIn />
              )
            ) : (
              <SignIn />
            )
          }
        >
        </Route>
        <Route path="/admin" 
          element={
            user ? (
              adminCheck ? (
                <AdminHome />
              ) : (
                <SignIn />
              )
            ) : (
              <SignIn />
            )
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
