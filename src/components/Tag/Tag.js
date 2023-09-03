import React from "react";
import style from "../../sass/components/Tag/tag.module.scss";

export default function Tag({ tagName }) {
  return (
    <div className={style.tagContainer}>
      <div className={style.tag}><p>{tagName}</p></div>
    </div>
  );
}
