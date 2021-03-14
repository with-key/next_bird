import React, { useState } from "react";
import Slick from "react-slick";
import styled, { createGlobalStyle } from "styled-components";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <header className="header">
        <h1>상세 이미지</h1>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </header>
      <div>
        <SlickWrapper className="SlickWrapper">
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
          >
            {images.map((img) => (
              <div key={img} className="img-wrapper">
                <img src={img.src} alt={img.src} className="img" />
              </div>
            ))}
          </Slick>
        </SlickWrapper>
      </div>
    </Overlay>
  );
};

// function`` 함수 호출 방법

const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;

}`;

const SlickWrapper = styled.div`
  .img-wrapper {
    text-align: center;
    .img {
      width: 400px;
    }
  }
`;

const Overlay = styled.div`
  /* fixed를 전체 화면으로 채움 */
  padding: 0 40px;
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #333;

  .header {
    height: 44px;
    position: relative;
    padding: 0;
    text-align: cetner;

    & h1 {
      margin: 0;
      font-size: 17px;
      color: #fff;
      line-height: 44px;
    }

    & button {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;

export default ImagesZoom;
