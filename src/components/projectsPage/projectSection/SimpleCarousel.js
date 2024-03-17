import { useState, useEffect, useCallback } from "react";
import projectOne from "../../../assets/images/project1.JPG";
import projectTwo from "../../../assets/images/project2.JPG";
import projectThree from "../../../assets/images/project3.jpg";
import projectFour from "../../../assets/images/project4.JPG";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./SimpleCarousel.module.css";

const SimpleCarousel = () => {
  const slides = [
    {
      src: projectOne,
      alt: "exhibition of artworks from children",
    },
    {
      src: projectTwo,
      alt: "exhibition of artworks from children",
    },
    {
      src: projectThree,
      alt: "child painting in the UK",
    },
    {
      src: projectFour,
      alt: "children painting in the UK",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  });

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [slideIndex, nextSlide]);

  return (
    <div>
      <div className={styles["carousel"]}>
        <BsArrowLeftCircleFill
          className={styles["arrow-left"]}
          onClick={prevSlide}
        />
        {slides.map((item, index) => {
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={
                styles[`${slideIndex === index ? "slide" : "slide-hidden"}`]
              }
            />
          );
        })}
        <BsArrowRightCircleFill
          className={styles["arrow-right"]}
          onClick={nextSlide}
        />
        <span className={styles["indicators"]}>
          {slides.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlideIndex(index)}
                className={
                  styles[
                    `${
                      slideIndex === index ? "indicator" : "indicator-inactive"
                    }`
                  ]
                }
              />
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default SimpleCarousel;
