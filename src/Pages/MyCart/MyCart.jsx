import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";

const MyCart = () => {

    const products = useLoaderData();

    return (
        <div>
            <h3 className="text-5xl font-bold text-center py-12">My Cart {products.length}</h3>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    products.map(product => <MyCartCard key={product._id} product={product}></MyCartCard> )
                }
            </div>
        </div>
    );
};

export default MyCart;