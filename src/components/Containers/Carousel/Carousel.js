import React, { useState } from "react";
import style from "../../../sass/components/Carousel/carousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPictures = pictures.length;

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return <p>Aucune photo n'est disponible.</p>;
  }


  const showArrowsAndPagination = totalPictures > 1;

  return (
    <div>
      <div className={style.carouselImageContainer}>
        <div className={style.componentsContainer}>
          <div></div>
          <div className={style.buttonsContainer}>
            {showArrowsAndPagination && (
              <button onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            {showArrowsAndPagination && ( 
              <button onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>

          {showArrowsAndPagination && (
            <div className={style.pagination}>
              {`${activeIndex + 1}/${totalPictures}`}
            </div>
          )}
        </div>
        <img src={pictures[activeIndex]} alt={` Aperçu n°${activeIndex +1}`} />

      </div>
    </div>
  );
};

export default Carousel;
