import "./App.css";
import Data from "./Data";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/CarHome/Home";
import Gallery from "./components/gallery/Gallery";

import { Parallax } from "react-parallax";
import Model from "./components/Model/Model";
import DetailModel from "./components/Model/DetailModel";

function App() {
  const [detail, setDetail] = React.useState([]);

  let url = window.location.pathname;

  const ContainerParallax = () => (
    <Parallax blur={-10} bgImage="./img/help.jpg" bgImageAlt="the cat" strength={300} className="p-4 services mt-5">
      <div class=" d-flex justify-content-center ">
        <img src="./services.png" alt="" srcset="" />
      </div>
      <h3 className="text-white text-center mt-3">
        Butuh <span>bantuan</span> untuk memilih mobil?
        <br /> <span> hubungi kami</span>
      </h3>

      <div class="div mt-5  container text-white">
        <div class="row justify-content-center gap-3">
          <div class="col-sm-4 d-flex align-items-center gap-3 ">
            <img src="./phone-call.png" alt="" />
            <h4>082257459855</h4>
          </div>
          <div class="col-sm-4 d-flex align-items-center gap-3">
            <img src="./instagram.png" alt="" />
            <h4>Andi Indahpatanra</h4>
          </div>
        </div>
      </div>
      <hr className="text-white  mt-5 " />
      <footer className=" mt-4 text-center text-white ">2022 - Mitsubishi Kendari</footer>
    </Parallax>
  );

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Navbar expand="lg" variant="dark" fixed="top" className="justify-content-center navbarnya">
            <Container>
              <Navbar.Brand href="#home">
                <img src="./img/logo.png" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto  justify-content-center" variant="pills" defaultActiveKey={url}>
                  <Nav.Item>
                    <Nav.Link className="text-white nav-item" eventKey="/">
                      <Link to={"/"}>Home</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="/model" className="text-white nav-item">
                      <Link to={"/model"}>Model</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="/gallery" className="text-white nav-item">
                      <Link to={"/gallery"}>Foto Gallery</Link>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/model" element={<Model setDetail={setDetail} detail={detail} />} />
          <Route path="/:detail" element={<DetailModel detail={detail} />} />
        </Routes>
      </BrowserRouter>

      {/* PARALLAX */}
      <ContainerParallax />
    </div>
  );
}

export default App;
