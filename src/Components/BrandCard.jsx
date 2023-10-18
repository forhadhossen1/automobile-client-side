
const BrandCard = ({ brand }) => {
    const {brand_name, image } = brand || {}
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="brand logo" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand_name}</h2>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BrandCard;