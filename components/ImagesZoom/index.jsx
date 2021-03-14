import React, { useState } from "react";
import Slick from "react-slick";
import styled from "styled-components";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SlideWrapper>
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <div>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
          >
            {images.map((img) => (
              <div key={img}>
                <img
                  src={img.src}
                  alt={img.src}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </SlideWrapper>
  );
};

const SlideWrapper = syled.div`

`;

export default ImagesZoom;
