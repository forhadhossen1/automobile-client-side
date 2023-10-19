import Swal from "sweetalert2";

const MyCartCard = ({ product }) => {
    const { _id, name, brand, price, rating, photo } = product || {};
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delet this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/products/${_id}`,{
                    method : 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


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

                            <button onClick={() => handleDelete(_id)}
                                className="btn bg-orange-700">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;