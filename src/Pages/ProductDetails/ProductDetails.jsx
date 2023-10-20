import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";

const ProductDetails = () => {
    const { brand_name } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://assignment10-automotive-server-qsns0nahl-forhadhossen1.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const filteredProducts = products.filter(product => product.brand === brand_name);
    if (filteredProducts.length < 1) {
        //    Swal.fire('No Products Available', 'There are no products available for this brand.', 'info');  
    }


    return (
        <div>
            <div className="">
            <Slider></Slider>
            </div>
            <div className="md:container md:mx-auto">
                <h2 className="text-2xl text-center py-12 font-bold"><span className="text-orange-700">{brand_name}</span> Products</h2>
                <div className="product-list grid gap-5 grid-cols-1 md:grid-cols-2">
                    {filteredProducts.map(product => (
                        <div key={product._id} className="product-card">
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img src={product.photo} alt="Album" className="h-[200px] lg:h-[400px] w-full" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>Brand Name : {product.brand}</p>
                                    <p>Price : {product.price} $</p>
                                    <p>Rating : <span className="text-orange-700 text-xl">{product.rating}</span> Stars</p>
                                    <div className="flex justify-end">
                                        <div className="card-actions justify-end">
                                            <Link to={`/update/${product._id}`} className="update-button">
                                                <button className="btn bg-orange-700">Update</button>
                                            </Link>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link to={`/details/${product._id}`} className="update-button">
                                                <button className="btn bg-orange-700">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
