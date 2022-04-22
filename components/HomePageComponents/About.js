import styles from "../../styles/homeModules/About.module.css";

import React from "react";

export default function About({ offsetY, isBreakpoint }) {
  const animation = isBreakpoint ? 1300 : 900;
  return (
    <div className={styles.about} id="about">
      <div
        className={styles.container}
        style={{
          transition: "1s",
        }}
      >
        <img
          src="/logo_swoop_circulo.webp"
          style={{
            transform: `rotate(${
              offsetY > animation ? offsetY - animation : 0
            }deg)`,
          }}
        />
        <h2
          style={{
            transform: `translateY(${
              offsetY > animation ? (offsetY - animation) * 0.5 : 0
            }%)`,
          }}
        >
          Swoop es una marca enfocada en mejorar la movilidad humana mediante
          ingeniería sustentable de alto desempeño
        </h2>
        <p>
          Fusionamos la diversion con la ingeniería para crear las mejores
          experiencias en movilidad humana
        </p>
      </div>
    </div>
  );
}
