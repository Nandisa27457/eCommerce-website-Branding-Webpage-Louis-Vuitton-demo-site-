import React from "react";
import "./Products.css";

// Main images
import virgilNigoFront from "../assets/Virgilx-Nigo.webp";
import virgilNigoBack from "../assets/back-view.png";

import bagFront from "../assets/bag-full.webp";
import bagBack from "../assets/bag-image .jpg";

import braceletFront from "../assets/bracelet.webp";
import braceletBack from "../assets/bracelet-top.webp";

// Detail images
import closeUp1 from "../assets/close-up.jpg";
import closeUp2 from "../assets/item-image.avif";
import closeUp3 from "../assets/item-image-pants .avif";
import closeUp4 from "../assets/hat.jpg";

import bag1 from "../assets/bag-1.jpg";
import bag2 from "../assets/bag-4-1.jpeg";
import bag3 from "../assets/bag-2-1.jpg";
import bag4 from "../assets/bag-5.webp";

import bracelet1 from "../assets/bracelet-1.avif";
import bracelet2 from "../assets/bracelet-2.avif";
import bracelet3 from "../assets/bracelet-3.avif";
import bracelet4 from "../assets/bracelet-4.avif";

export default function FashionGrid() {
  return (
    <div className="fashion-container">
      <h1>Products</h1>
      <div className="products-row">
        {/* First set */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src={virgilNigoFront} alt="Front look" className="front" />
            <img src={virgilNigoBack} alt="Back look" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src={closeUp1} alt="Detail view 1" /></div>
            <div className="image-card detail-image"><img src={closeUp2} alt="Detail view 2" /></div>
            <div className="image-card detail-image"><img src={closeUp3} alt="Detail view 3" /></div>
            <div className="image-card detail-image"><img src={closeUp4} alt="Detail view 4" /></div>
          </div>
        </div>

        {/* Second set */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src={bagFront} alt="Front look 2" className="front" />
            <img src={bagBack} alt="Back look 2" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src={bag1} alt="Detail view 5" /></div>
            <div className="image-card detail-image"><img src={bag2} alt="Detail view 6" /></div>
            <div className="image-card detail-image"><img src={bag3} alt="Detail view 7" /></div>
            <div className="image-card detail-image"><img src={bag4} alt="Detail view 8" /></div>
          </div>
        </div>

        {/* Third set */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src={braceletFront} alt="Front look 3" className="front" />
            <img src={braceletBack} alt="Back look 3" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src={bracelet1} alt="Detail view 9" /></div>
            <div className="image-card detail-image"><img src={bracelet2} alt="Detail view 10" /></div>
            <div className="image-card detail-image"><img src={bracelet3} alt="Detail view 11" /></div>
            <div className="image-card detail-image"><img src={bracelet4} alt="Detail view 12" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
