import React from "react";
import styles from "../../sass/components/Card/card.module.scss";

export default function Card({ logement }) {
  return (
    <div
      className={styles.accomodationContainer}
      style={{
        backgroundImage: `url(${logement.cover})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className={styles.accomodationTitle}>{logement.title}</h2>
    </div>
  );
}
