import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {

    const alldetails = useLoaderData();
    const { name, brand, price, details, photo } = alldetails || {};

    const handleAddToMYCart = () => {
        Swal.fire(
            'Success',
            'Added My Cart',
            'success'
        )
    }


    return (
        <div className="py-12">
            <div>
                <h2 className="text-3xl font-bold text-center py-10">{name} Details</h2>
                <div className="card md:max-w-5xl md:mx-auto bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src={photo} alt="image" className="rounded-lg h-[400px] w-full" />
                    </figure>
                    <div className="card-body  text-center">
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p className="text-xl font-bold text-start">Price : {price} $</p>
                        <p className="text-xl font-bold text-start">Brand : {brand} $</p>
                        <p className="text-start">{details}</p>
                    </div>
                    <button onClick={handleAddToMYCart} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-orange-700 mx-4">Add to My Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;