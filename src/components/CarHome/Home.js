import React from "react";
import data from "../../Data";
import Mapping from "./Mapping";
import { Carousel } from "react-bootstrap";

import "./car.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Car = () => {
  Aos.init();
  const result = data.map((dt) => {
    return <Mapping data={dt} />;
  });

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {/* =================================== JUMBOTRON ======================================== */}
      <div class="container-jumbotron">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src="./img/slide3.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./img/slide2.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="./img/slide1.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* =================================== PILIHAN MOBIL ======================================== */}
      <h1 className="text-center mt-5">Mitsubishi Kendari</h1>
      <h2 className="text-muted text-center">Produk Mobil Mitsubishi Kendari</h2>
      <div class="container mt-5">
        <div className="row mb-5">{result} </div>
      </div>

      {/* KONTAK */}
    </div>
  );
};

export default Car;
