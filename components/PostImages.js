import { PlusOutlined } from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import ImagesZoom from "./ImagesZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImgagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImgagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImgagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "50%" }}
            role="presentation"
            src={images[0].src}
            alt={images[0].src}
            onClick={onZoom}
          />
          <img
            style={{ width: "50%" }}
            role="presentation"
            src={images[1].src}
            alt={images[1].src}
            onClick={onZoom}
          />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ width: "50%" }}
        role="presentation"
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        role="presentation"
        onClick={onZoom}
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PlusOutlined />
        <div>{images.length - 1} 개의 사진 더 보기</div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

export default PostImages;
