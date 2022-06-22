import React from "react";
import "../CarHome/car.css";
import "bs5-lightbox";
import Data from "./Data";

const Gallery = () => {
  const picture = Data.map((dt) => {
    return (
      <div class="col-sm-3 mb-3" data-aos="fade-up" data-aos-offset="200">
        <a href={dt.img} data-toggle="lightbox" data-gallery="example-gallery">
          <img src={dt.img} alt="" class="img-fluid" />
        </a>
      </div>
    );
  });
  return (
    <div className="gallery lain gap-1 ">
      <h1 className="text-center mb-3">Gallery Foto Bersama Pembeli</h1>
      <div class="container ">
        <div class="row gap-1 justify-content-center">{picture}</div>
      </div>
    </div>
  );
};

export default Gallery;
