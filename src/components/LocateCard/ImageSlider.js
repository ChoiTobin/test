import React, { useEffect, useState } from "react";

const ImageSlider = ({ slides, DotChange, setDotChange, slideIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "80% 80%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${slides[currentIndex].img})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  let str = ["<", ">"];

  const goToprevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setCurrentIndex(DotChange);
  }, [DotChange]);

  return (
    <div style={sliderStyles}>
      <div className="LocateOne-font1">
        <span>{currentIndex + 1}층</span>
      </div>
      <div className="LocateOne-font2">
        민원 여권과,당직실,부동산정보과,로비
      </div>

      <div style={leftArrowStyles} onClick={goToprevious}>
        {str[0]}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        {str[1]}
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
