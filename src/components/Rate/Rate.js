import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "../../sass/components/Rate/rate.module.scss";

export default function Rate({ rating }) {
  const stars = [];
  const rateStars = Math.floor(rating);

  for (let i = 0; i < rateStars; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={style.rateStars} />
    );
  }

  const restStars = 5 - stars.length;

  for (let i = 0; i < restStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${i}`}
        icon={faStar}
        className={style.restStars}
      />
    );
  }

  return <div>{stars}</div>;
}
