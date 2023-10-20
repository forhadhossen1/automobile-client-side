import { useLoaderData } from "react-router-dom";


const Details = () => {

    const alldetails = useLoaderData();
    const { name, brand, price, details, photo } = alldetails || {};



    return (
        <div>
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
                </div>
            </div>
        </div>
    );
};

export default Details;