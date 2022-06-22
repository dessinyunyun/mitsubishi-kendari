import React from "react";
import Data from "../../Data";
import "./poster.css";
import { Link } from "react-router-dom";

const Model = (props) => {
  const Poster = Data.map((dt) => {
    return (
      <div class="col-sm-6 poster mb-5 " data-aos="fade-up" data-aos-offset="200">
        <h2>{dt.car}</h2>
        <Link to={`/${dt.id}`}>
          <img
            src={dt.poster}
            alt=""
            onClick={() => {
              console.log(props.detail);
              props.setDetail(dt);
            }}
          />
        </Link>
      </div>
    );
  });
  return (
    <div className="lain  ">
      <h1 className="text-center mb-5">Mobil Mitsubishi Kendari</h1>
      <div class="container ">
        <div class="row justify-content-center text-center">{Poster}</div>
      </div>
    </div>
  );
};

export default Model;
