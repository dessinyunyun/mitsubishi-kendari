import React from "react";
import "./car.css";

const Mapping = (props) => {
  return (
    <div class="col-sm-4 mb-3" data-aos="fade-up" data-aos-offset="200">
      <div class="img">
        <img src={props.data.img} alt="" />
      </div>
      <div class="footer-cards bg-dark px-3  d-flex align-items-center">
        <div class="textnya">
          <p className="text-white mt-2">
            {props.data.type} <br /> Harga Mulai {props.data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mapping;
