import styles from "../../styles/homeModules/Contact.module.css";
import Link from "next/link";

import React from "react";
import { useRouter } from "next/router";

export default function Contact({}) {
  const router = useRouter();
  const handleRooster = (e) => {
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };
  const handleHome = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleAbout = (e) => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  const handleContact = (e) => {
    window.scrollTo({ top: 10000, behavior: "smooth" });
  };

  return (
    <div className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <img src="/logo_swoop_blanco.webp" />
          <ul>
            <li>
              <p onClick={(e) => handleHome(e)}>Home</p>
            </li>
            <li>
              <p onClick={(e) => handleAbout(e)}>About</p>
            </li>
            <li onClick={(e) => handleRooster(e)}>
              <p>Rooster</p>
            </li>
            <li>
              <p onClick={(e) => handleContact(e)}>Contacto</p>
            </li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <div>
            <h2>Contactanos</h2>
            <p>mtalavera@swoopmobility.com</p>
            <p>arodriguez@swoopmobility.com</p>
            <p>+52 55 59852709</p>
            <div className={styles.iconsContainer}>
              <i className="fab fa-instagram"></i>
              <i className="far fa-envelope"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
      <small>© Copyright 2022, Swoop</small>
    </div>
  );
}
