import Swal from "sweetalert2";

const MyCartCard = ({product}) => {
    const {_id, name, brand, price, rating, photo} = product || {}

   
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="car" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Brand : {brand}</p>
                    <p>price : {price}</p>
                    <p>rating : {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn btn-active">view</button>
                        
                            <button className="btn">edit</button>
                        
                        <button
                            className="btn bg-orange-700">X</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyCartCard;