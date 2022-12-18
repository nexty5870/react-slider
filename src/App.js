import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1485813727108-9b009dfab116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-slate-900">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* Left arrow */}
          <div className="hidden group-hover:block text-white text-4xl absolute top-1/2 left-5 transform -translate-y-1/2 rounded-full hover:bg-white/20 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} />
          </div>

          {/* Right arrow */}
          <div className="hidden group-hover:block text-white text-4xl absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full hover:bg-white/20 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, index) => (
            <div key={index} onClick={() => goToSlide(index)}>
              <RxDotFilled
                className={
                  index === currentSlide
                    ? "text-2xl cursor-pointer fill-current text-[#9CA3AF]"
                    : "text-2xl cursor-pointer fill-current text-[#1E293B]"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
