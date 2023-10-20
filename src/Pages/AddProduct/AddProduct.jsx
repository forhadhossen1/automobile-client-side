import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, price, rating, details, photo }

        console.log(newProduct);

        // send data to the server..

        fetch(' https://assignment10-automotive-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Good job!',
                    'Product added successfuly ',
                    'success'
                )
            })
    }

    return (
        <div className=" bg-[#F4F3F0] p-8 md:p-24">
            <h2 className="text-3xl text-center font-medium">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* name category */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Product name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="brand_name" placeholder="Enter product brand" className="input input-bordered w-full" /> */}
                            <select name="brand_name" className="input input-bordered w-full" >
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
                            <input type="text" name="price" placeholder="Enter Product price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter Product Rating" className="input input-bordered w-full" />
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
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="bg-orange-700 p-3 my-5 rounded-lg text-center">
                    <input type="submit" value="Add Product" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;