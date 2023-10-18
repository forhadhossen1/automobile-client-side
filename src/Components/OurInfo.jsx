const OurInfo = () => {
    return (
        <div className=" pb-12">
            <h2 className="text-5xl font-semibold mb-4 text-center py-12">Our <span className='text-orange-700'> Info</span></h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:container md:mx-auto">
                {/* address ...  */}
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/549N6XN/location-pin.png" alt="location" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Address</h2>
                        <p>Auto Speed <br /> New Yourk <br /> k13s45</p>
                    </div>
                </div>

                {/* .... Email...  */}
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/q17hsKD/mail.png" alt="email" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Email-Phone</h2>
                        <p>Phone : 6484223 <br /> Fax : 5+5+523 <br />helo@gamil.com</p>
                    </div>
                </div>

                {/* open times  */}
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/yNThzYn/phone-call.png" alt="Open time" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Open Times</h2>
                        <p>Sat-Thus<br /> 8.00am - 5.00pm<br /> Weekend Closed</p>
                    </div>
                </div>

                {/* .. sessions  */}
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/9cQ9gTM/bar-chart.png" alt="Session" className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Open Shop</h2>
                        <p>Mornings-Noon<br />Afternoons<br />Full Day</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInfo;
