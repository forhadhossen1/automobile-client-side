import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {

    const loadProducts = useLoaderData();
    const [products, setProducts] = useState(loadProducts)

    return (
        <div>
            <h3 className="text-5xl font-bold text-center py-12">My Cart</h3>
            <div className="grid md:grid-cols-2 gap-4 md:container md:mx-auto">
                {
                    products.map(product => <MyCartCard key={product._id}
                         product={product}
                         products = {products}
                         setProducts = {setProducts}
                         ></MyCartCard> )
                }
            </div>
        </div>
    );
};

export default MyCart;