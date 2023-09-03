import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../sass/layout/Grid/grid.module.scss";
import HomeCard from "../../../components/Card/Card";
import logementsData from "../../../data/logements.json";

export default function Grid() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, [logements]);

  const handleHomeCardClick = (logement) => {
    // console.log("Images du logement sélectionné :", logement.pictures);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {logements.map((logement) => (
          <li key={logement.id} className={styles.listItem}>
            <Link to={`/accomodation/${logement.id}`} onClick={() => handleHomeCardClick(logement)}>
              <HomeCard logement={logement} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
