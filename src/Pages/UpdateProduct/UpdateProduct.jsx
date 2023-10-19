import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brand, price, rating, photo } = product || {};

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateProduct = { name, brand, price, rating, details, photo }

        console.log(updateProduct);

        // send data to the server..

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
               if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Update successfuly',
                    'success'
                )
               }
            })
    }

    return (
        <div className=" bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-medium">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* name category */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Product name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="brand_name" placeholder="Enter product brand" className="input input-bordered w-full" /> */}
                            <select name="brand_name" defaultValue={brand} className="input input-bordered w-full" >
                                <option disabled selected>Select brand</option>
                                <option>B M W</option>
                                <option>Volkswagon</option>
                                <option>Audi</option>
                                <option>Fiat</option>
                                <option>Mercedes</option>
                                <option>Honda</option>
                            </select>
                        </label>

                    </div>
                </div>
                {/* price */}
                <div className="md:flex  gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Enter Product price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter Product Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/*deatails */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Enter Product details" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* Photo url */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="bg-orange-700 p-3 my-5 rounded-lg text-center">
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;