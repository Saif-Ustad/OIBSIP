import "./ProductSection.scss";
import SingleItem from "./SingleItem/SingleItem";

//redux
import { getAllProducts } from "../../Action/ProductAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSection = () => {

    const { products } = useSelector((state) => state.productReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])


    return (
        // <div className="productSection">
        //     <div className="container">
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //         <SingleItem />
        //     </div>
        // </div>
        <div className="productSection">
            <div className="container">
                {products?.map((product, id)=> {
                    return (
                        <SingleItem pizza={product} key={id}/>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductSection;