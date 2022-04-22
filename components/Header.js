import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { CgMenuGridO } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import Dropdown from "./Dropdown";
import { FaShoppingBag } from "react-icons/fa";

export default function Header({
  setRooster,
  offsetY,
  setSideCart,
  cart,
  isCheckout,
  isBreakpoint,
}) {
  const animation = isBreakpoint ? "1299" : "1299";
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const handleCartBtn = () => {
    setDropdown(false);
    setSideCart(true);
  };

  const scrollRooster = () => {
    () => window.scrollTo({ top: 1300, behavior: "smooth" });
  };
  const handleRooster = (e) => {
    if (isCheckout) {
      router.push("/");
      scrollRooster();
    } else {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }
  };
  const handleHome = (e) => {
    if (isCheckout) {
      router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleAbout = (e) => {
    if (isCheckout) {
      router.push("/");
      window.scrollTo({ top: 700, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 700, behavior: "smooth" });
    }
  };
  const handleContact = (e) => {
    if (isCheckout) {
      router.push("/");
      window.scrollTo({ top: 10000, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 10000, behavior: "smooth" });
    }
  };
  useEffect(() => {
    setDropdown(false);
  }, [offsetY]);

  return (
    <div className={styles.header}>
      <div
        className={styles.background}
        style={{
          transform: `translateY(${offsetY > animation ? 0 : -100}%)`,
          transition: ".5s",
        }}
      ></div>
      <div className={styles.container}>
        <img
          onClick={(e) => handleHome(e)}
          className={styles.icon}
          src="/logo_swoop_blanco.webp"
        />
        {isCheckout ? (
          <ul>
            <li>
              <p onClick={(e) => handleHome(e)}>Regresar</p>
            </li>
          </ul>
        ) : (
          ""
        )}
        <div
          className={styles.iconsContainer}
          style={{ display: isCheckout && !isBreakpoint ? "none" : "flex" }}
        >
          {isBreakpoint ? (
            ""
          ) : (
            <button
              onClick={() => handleRooster()}
              style={{
                height: "50px",
                margin: "auto 60px",
                animationDuration: "0s",
                opacity: offsetY > animation && offsetY < 1990 ? 0 : 1,
                cursor:
                  offsetY > animation && offsetY < 1990 ? "default" : "pointer",
              }}
              className="secondaryButton"
            >
              Ordenar ahora
            </button>
          )}
          {!dropdown ? (
            <CgMenuGridO
              style={{ marginRight: isCheckout ? "0px" : "30px" }}
              className={styles.menu}
              onClick={() => setDropdown(true)}
            />
          ) : (
            <CgClose
              style={{ marginRight: isCheckout ? "0px" : "30px" }}
              className={styles.menu}
              onClick={() => setDropdown(false)}
            />
          )}
          {isCheckout ? (
            ""
          ) : (
            <div className={styles.iconContainer}>
              {cart && cart.total_items > 0 ? (
                <div className={styles.itemNum}>
                  <p>{cart.total_items}</p>
                </div>
              ) : (
                ""
              )}
              <FaShoppingBag
                className={styles.bagIcon}
                onClick={() => handleCartBtn()}
              />
            </div>
          )}
        </div>
      </div>
      <Dropdown
        setDropdown={setDropdown}
        dropdown={dropdown}
        isCheckout={isCheckout}
        setSideCart={setSideCart}
      />
    </div>
  );
}
