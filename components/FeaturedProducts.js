import React from "react";
import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

const FeaturedProducts = () => {
  return (
    <div className="carousel w-full">
      <div
        id="product1"
        className="carousel-item relative w-full justify-center"
      >
        <ProductCarousel />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#product3" className="btn btn-circle">
            ❮
          </a>
          <a href="#product2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="product2" className="carousel-item relative w-full">
        <ProductCarousel />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#product1" className="btn btn-circle">
            ❮
          </a>
          <a href="#product3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="product3" className="carousel-item relative w-full">
        <ProductCarousel />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#product2" className="btn btn-circle">
            ❮
          </a>
          <a href="#product1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
