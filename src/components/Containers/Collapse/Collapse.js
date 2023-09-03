import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../sass/components/Collapse/collapse.module.scss";

export default function Collapse({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`${styles.chevron} ${
            isExpanded ? styles.chevronExpanded : ""
          }`}
          onClick={toggleCollapse}
        />
      </div>
      <div
        className={`${styles.descriptionContainer} ${
          isExpanded ? styles.descriptionExpanded : ""
        }`}
        style={{ maxHeight: isExpanded ? "500px" : "0" }}
      >
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
