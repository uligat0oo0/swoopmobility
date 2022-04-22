import styles from "../../styles/homeModules/FichaTecnica.module.css";

import React from "react";

export default function FichaTecinica() {
  return (
    <div className={styles.fichaTecnica}>
      <div className={styles.container}>
        <img src="/fichaTecnica.webp" />
      </div>
    </div>
  );
}
