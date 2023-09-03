import React from "react";
import styles from "../../../sass/layout/Footer/footer.module.scss"
import footerLogo from "../../../images/logo-kasa-blanc.svg"

export default function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLogo}>
          <img src={footerLogo} alt="logo Kasa footer" />
        </div>
        <div>
            <p className={styles.footerCopyright}>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    );
  }
  