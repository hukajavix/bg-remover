import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, SetSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    SetSliderPosition(e.target.value);
  };
  return (
    <div className="pb-10 md:py-20 mx-2">
      {/* --------Title---------- */}
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background with High <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* ------------Background Image------- */}
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />
        {/* --------ForeGround Image-------- */}
        <img
          className="absolute top-0 right-0 w-full h-full"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }}
          alt=""
        />
        {/* -----------slider-------- */}
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default BgSlider;