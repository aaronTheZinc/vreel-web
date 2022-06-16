import React from "react";
import CommonSliders from "../CommonVideoImageSlider/CommonSliders";

const imageData = [
  {
    uri: "/assets/images/Events1.svg",
    content_type: "image",
    alt: "slide-1",
  },
  {
    uri: "/assets/images/Events2.svg",
    content_type: "image",
    alt: "slide-2",
  },
  {
    uri: "/assets/images/regLogBg.png",
    content_type: "image",
    alt: "slide-3",
  },
];

const ImagesSlider = () => {
  return <CommonSliders data={imageData} actions={() => {}} />;
};

export default ImagesSlider;
