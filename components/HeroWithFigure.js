import React from "react";

const HeroWithFigure = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row border-4 border-accent-focus p-10 rounded-lg shadow-2xl">
        <img
          src="/6859464.jpg"
          className="max-w-2xl rounded-lg shadow-2xl mr-10"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
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

export default HeroWithFigure;
