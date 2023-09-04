import "./Product.scss";
import Navbar from "../../components/HomeSection/Navbar/Navbar";
import ProductPage from "../../components/ProductPage/ProductPage";


const Product = () => {
    return (
        <div className="product">
            <Navbar />
            <ProductPage />
        </div>
    );
}

export default Product;