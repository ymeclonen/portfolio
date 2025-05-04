import React, { useState, useEffect } from "react";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 3000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden flex items-center flex-nowrap bg-wite rounded-lg"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((item, index) => (
          <div className="min-w-full" key={index}>
            {item}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full text-white text-xl shadow-lg hover:bg-black/40 transition-transform duration-300 hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>

      {/* Prev Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full text-white text-xl shadow-lg hover:bg-black/40 transition-transform duration-300 hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>

    </div>
  );
}

export default CustomCarousel;
