import React from "react";
import Navbar from "../Navbar";
import heroChart from "../../src/assets/HeroGraphics.png";
import fluidGlu from "../../src/assets/fluid-glu.svg";
import hikkeno from "../../src/assets/hikkeno.svg";
import bubble from "../../src/assets/bubble.svg";

function HeroSection() {
  return (
    <div className="hero z-10">
      <Navbar />
      {/* HeroSection */}
      <div className="bg-[#DBE5FF]">
        <div className="main-hero-section px-7 lg:px-10 max-w-5xl mx-auto flex flex-col gap-y-5  items-center gap-x-10 justify-center py-10 lg:pt-24  ">
          <div className="hero-content flex flex-col max-w-4xl mx-auto gap-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-lg mx-auto md:max-w-xl md:mx-auto text-center lg:mx-0 lg:max-w-4xl font-semibold text-[#1A1A1A]">
              Simplify your business operations & streamline employee management
            </h1>
            <p className="text-base font-medium text-[#1A1A1A]/80 max-w-xl mx-auto text-center">
              With our user-friendly platform, you can easily handle everything
              from onboarding to offboarding, time-off tracking, and more, all
              in one place.
            </p>
            <div className="flex items-center max-w-2xl w-1/2 mx-auto justify-center gap-x-5">
              <button className="bg-[#161616] w-full hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-xs lg:text-base rounded-md px-4 py-2">
                Try free
              </button>
              <button className="bg-[#161616]/20 w-full hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-black font-semibold text-xs lg:text-base rounded-md px-4 py-2">
                Try free
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={heroChart} alt="" />
          </div>
        </div>
        {/* Featured-company Section */}
        <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center px-5 py-5 lg:pb-20">
          <p className="text-base text-center lg:text-xl font-medium px-10 text-slate-500/70">
            We have the fast paced growing companies with us
          </p>
          <div className="company-logo flex items-center lg:w-full max-w-4xl mx-auto justify-center gap-x-10 lg:gap-x-20">
            <img
              className="h-14 w-24 lg:h-auto lg:w-auto"
              src={fluidGlu}
              alt=""
            />
            <img
              className="h-14 w-24 lg:h-auto lg:w-auto"
              src={hikkeno}
              alt=""
            />
            <img
              className="h-14 w-24 lg:h-auto lg:w-auto"
              src={bubble}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
