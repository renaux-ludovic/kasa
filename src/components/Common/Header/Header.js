import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../sass/layout/Header/Header.module.scss";
import mainLogo from "../../../images/LOGO.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.containerLogo}>
        <img src={mainLogo} alt="logo Kasa" />
      </div>
      <nav className={styles.mainNav}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </div>
  );
}
