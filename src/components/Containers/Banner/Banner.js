import React from "react";
import styles from "../../../sass/components/Banner/banner.module.scss";

export default function Banner({ title, backgroundURL,customClassName  }) {
  return (
    <div className={`${styles.banner} ${customClassName}`}
      style={{ backgroundImage: `url(${backgroundURL})` }}>
      <div className={styles.titleContainer}>
        <h1 className={styles.bannerTitle}>{title}</h1>
      </div>
    </div>
  );
}
