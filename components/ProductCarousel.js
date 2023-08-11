import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item px-2.5">
        <ProductCard
          image={
            "http://www.bonayon.com/image/cache/catalog/perenial%20shrubs%20flower/allamanda-hybrid-yellow-500x539.jpg"
          }
        />
      </div>
      <div className="carousel-item px-2.5">
        <ProductCard
          image={
            "http://www.bonayon.com/image/cache/catalog/perenial%20shrubs%20flower/azalea-pink-500x539.jpg"
          }
        />
      </div>
      <div className="carousel-item px-2.5">
        <ProductCard
          image={
            "http://www.bonayon.com/image/cache/catalog/rose/blue-%20moon-500x539.jpg"
          }
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
