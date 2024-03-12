import { useState, useEffect, useCallback } from "react";
import imageOne from "../../../assets/images/cleaningProductsBrush.jpg";
import imageTwo from "../../../assets/images/cleaningSurface.jpg";
import imageThree from "../../../assets/images/friendshipCutout.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./SimpleCarousel.module.css";

const SimpleCarousel = () => {
  const slides = [
    {
      src: imageOne,
      alt: "image 1 from carousel",
    },
    {
      src: imageTwo,
      alt: "image 2 from carousel",
    },
    {
      src: imageThree,
      alt: "image 3 from carousel",
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
