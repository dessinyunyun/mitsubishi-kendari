import React from "react";

const DetailModel = (props) => {
  return (
    <div className="lain text-center">
      <div class="div">
        <div class="poster mb-5 ">
          <h1>Harga {props.detail.car}</h1>

          <img src={props.detail.poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailModel;
