import React from 'react';

const Banner = () => {
  return (
      <div className="carousel w-full">
        <div id="slide1" className="h-[400px] lg:h-[600px] carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/YQZ9W3N/banner-car3.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Exotic tastes at your <br />
                  doorstep
                </h1>
                <p className="mb-5">We supply highly quality organic products</p>
            
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-slate-900 text-white border-slate-900">❮</a>
            <a href="#slide2" className="btn btn-circle bg-slate-900 text-white border-slate-900">❯</a>
          </div>
        </div>
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/PCn9F0Q/banner-car2.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Reality is Just<br />
                  Your perception
                </h1>
                <p className="mb-5">Choose as per your perception</p>         
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-slate-900 text-white border-slate-900">❮</a>
            <a href="#slide3" className="btn btn-circle bg-slate-900 text-white border-slate-900">❯</a>
          </div>
        </div>
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/qdzT6d1/banner-car.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Exotic tastes at your <br />
                  doorstep
                </h1>
                <p className="mb-5">We supply highly quality organic products</p>
            
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-slate-900 text-white border-slate-900">❮</a>
            <a href="#slide4" className="btn btn-circle bg-slate-900 text-white border-slate-900">❯</a>
          </div>
        </div>
        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/5RzHfJW/banner-car4.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Exotic tastes at your <br />
                  doorstep
                </h1>
                <p className="mb-5">We supply highly quality organic products</p>
            
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-slate-900 text-white border-slate-900">❮</a>
            <a href="#slide1" className="btn btn-circle bg-slate-900 text-white border-slate-900">❯</a>
          </div>
        </div>
      </div>
  );
};

export default Banner;
