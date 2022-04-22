import styles from "../styles/Whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

import React from "react";
import Link from "next/link";

export default function Whatsapp({ isBreakpoint }) {
  return (
    <div>
      {isBreakpoint ? (
        <Link href="https://wa.link/pz8z6j">
          <a>
            <div className={styles.whatsapp}>
              <FaWhatsapp className={styles.whatsappIcon} />
            </div>
          </a>
        </Link>
      ) : (
        <Link href="https://wa.link/pz8z6j">
          <a target="_blank">
            <div className={styles.whatsapp}>
              <FaWhatsapp className={styles.whatsappIcon} />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
}
