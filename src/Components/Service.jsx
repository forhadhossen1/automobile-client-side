import React from 'react';

const Service = () => {
    return (
        <div>
             <div className=" pb-12">
            <h2 className="text-5xl font-semibold mb-4 text-center py-12">Our <span className='text-orange-700'>Service</span></h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:container md:mx-auto">
                {/* financing ...  */}
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="card  bg-base-100">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/t81Dd4j/lebel-icon.png" alt="location" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Financing</h2>
                    </div>
                </div>

                

                {/* open times  */}
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="card  bg-base-100 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Service Depertment</h2>
                        <p>Mon,wed:	8:00am - 5:00pm<br />Tue,Fri:	8:00am - 9:00pm<br />Sun:	Closed</p>
                    </div>
                </div>

                {/* .. sales */}
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="card  bg-base-100 ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sales Depertment</h2>
                        <p>Mon,wed:	8:00am - 5:00pm<br />Tue,Fri:	8:00am - 9:00pm<br />Sun:	Closed</p>
                    </div>
                </div>

                {/* ....warranty...  */}
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="card  bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/QK7TSp4/gear1.png" alt="waranty" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Warranty</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;