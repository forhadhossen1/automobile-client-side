import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import BrandCard from "../../Components/BrandCard";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl font-bold text-center py-12">Populer Cars From The Brands <br /> You Love</h2>

                <div className=" md:container md:mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand} ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;