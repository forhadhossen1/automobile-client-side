
import { useState, useEffect } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        return newIndex;
      });

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('active');
    };

    const intervalId = setInterval(showSlides, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  return (
    <div className='lg:h-[40vh]'>
      <div className="relative slideshow-container">
        {/* Slides */}
        <div className="mySlides fade">
          <div className="w-full flex items-center justify-center">
            <img src="https://i.ibb.co/xzSyQhk/compear.png" alt="Slide 1"  className='h-[40vh] w-full'/>
          </div>
        </div>

        <div className="mySlides fade">
          <div className="w-full flex items-center justify-center">
            <img src="https://i.ibb.co/yXj7LH8/gear-icon.png" alt="Slide 2" className='h-[40vh] w-full' />
          </div>
        </div>

        <div className="mySlides fade">
          <div className="w-full flex items-center  ">
            <img src="https://i.ibb.co/YQZ9W3N/banner-car3.jpg" alt="Slide 3" className='h-[40vh] w-full' />
          </div>
        </div>
        {/* End of Slides */}
      </div>

      <br />
    </div>
  );
};

export default Slider;
