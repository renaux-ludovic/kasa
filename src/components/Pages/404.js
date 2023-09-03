import React from "react";
import { Link } from "react-router-dom";
import styles from "../../sass/pages/404/404.module.scss";

export default function Error404() {
  return (
    <div className={styles.errorContainer}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="../">Retourner sur la page d’accueil</Link>
    </div>
  );
}
