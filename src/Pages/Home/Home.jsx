import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import BrandCard from "../../Components/BrandCard";
import Footer from "../../Components/Footer";
import OurInfo from "../../Components/OurInfo";
import Map from "../../Components/Map";
import OurSatisfaction from "../../Components/OurSatisfaction";
import Service from "../../Components/Service";
import Compare from "../../Components/Compare";
import { useState } from "react";

const Home = () => {

    const brands = useLoaderData();
    const [darkMode, setDarkMode] =useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      const containerClasses = `transition-colors duration-300 ease-in-out ${
        darkMode
          ? 'dark bg-black text-white' 
          : 'bg-white text-black' 
      }`;

    return (
        <div className={containerClasses}>
            <Banner></Banner>
            <div className="my-12">
                <h2 className="text-4xl font-bold text-center py-12">Populer Cars From The Brands <br /> You Love</h2>

                <div className=" md:container md:mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand} ></BrandCard>)
                    }
                </div>
            </div>
            <Compare></Compare>
            <OurInfo></OurInfo>
            <OurSatisfaction></OurSatisfaction>
            <Map></Map>
            <Service></Service>
            <Footer></Footer>

            <button
                className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
                onClick={toggleDarkMode}
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default Home;