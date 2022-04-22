import styles from "../styles/Dropdown.module.css";

import React from "react";
import { useRouter } from "next/router";

export default function Dropdown({
  setDropdown,
  dropdown,
  isCheckout,
  setSideCart,
}) {
  const router = useRouter();

  const handleRooster = (e) => {
    if (isCheckout) {
      router.push("/");
    } else {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }
  };
  const handleHome = (e) => {
    if (isCheckout) {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleAbout = (e) => {
    if (isCheckout) {
      router.push("/");
    }
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  const handleContact = (e) => {
    if (isCheckout) {
      router.push("/");
    } else {
      window.scrollTo({ top: 10000, behavior: "smooth" });
    }
  };

  return (
    <div
      className={styles.dropdown}
      onClick={() => setDropdown(false)}
      style={{
        transform: `translateX(${dropdown ? "0" : "100"}%)`,
        transition: ".5s",
      }}
    >
      {isCheckout ? (
        <ul>
          <li>
            <p onClick={(e) => handleHome(e)}>Regresar</p>
          </li>
        </ul>
      ) : (
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
        </ul>
      )}
      {isCheckout ? (
        ""
      ) : (
        <button
          onClick={() => handleRooster()}
          style={{
            height: "50px",
            margin: "auto",
            animationDuration: "0s",
            width: "90%",
          }}
          className="primaryButton"
        >
          Ordenar ahora
        </button>
      )}
    </div>
  );
}
