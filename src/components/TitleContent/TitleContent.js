import React from "react";

import style from "../../sass/components/AccomodationTitle/accomodatoinTitle.module.scss";


export default function AccomodationHeadContent({ title, location }) {
  return (
    <div>
      <div className={style.headContainer}>
        <div className={style.titleContainer}>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
      </div>
    </div>
  );
}
