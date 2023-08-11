import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/animation_ll5g9fm5.json";

const HeroWithOverlayAnimation = () => {
  return (
    <div className="hero">
      <Lottie className="w-full h-full" animationData={animationData} />
      <div className="hero-overlay bg-white text-black"></div>
      <div className="hero-content text-center border-4 bg-white bg-opacity-25">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroWithOverlayAnimation;
