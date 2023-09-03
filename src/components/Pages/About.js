import React from "react";
import Banner from "../Containers/Banner/Banner";
import Collapse from "../Containers/Collapse/Collapse";
import styles from "../../sass/pages/About/about.module.scss";
import AboutBanner from "../../images/banner_about.jpg";

export default function About() {
  return (
    <div>
      <Banner
        customClassName={styles.AboutBanner}
        backgroundURL={AboutBanner}
      />
      <div className={styles.collapseContainer}>
        <Collapse
          title="Fiabilité"
          text={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
        />
        <Collapse
          title="Respect"
          text={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          title="Service"
          text={
            "Kasa vous propose la location de biens entre particutiliers pour vos destinations de vacances favorites."
          }
        />
        <Collapse
          title="Sécurité"
          text={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
}
