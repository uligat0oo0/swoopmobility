import React, { useEffect, useState } from "react";
import styles from "../../styles/homeModules/Rooster.module.css";
import { commerce } from "../../utils/commerce";
import {
  FaPlug,
  FaCompactDisc,
  FaBell,
  FaLeaf,
  FaShoePrints,
} from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { MdElectricScooter, MdWbTwilight } from "react-icons/md";
import FichaTecinica from "./FichaTecinica";
import { ClipLoader } from "react-spinners";

export default function Rooster({
  retrieveCart,
  setSideCart,
  offsetY,
  isBreakpoint,
}) {
  const animation = isBreakpoint ? 1000 : 1000;
  const [color, setColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState("prod_9BAmwJrD09weXd");
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    if (loading === true) {
      return;
    } else {
      setLoading(true);
      await commerce.cart.add(id, quantity);
      retrieveCart();
      setSideCart(true);
      setLoading(false);
    }
  };

  const renderImage = () => {
    if (color === "white") {
      return "/rooster3.0-blanco.webp";
    } else if (color === "black") {
      return "/rooster3.0-negro.webp";
    }
  };
  const addQty = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const subtractQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (color === "white") {
      setId("prod_9BAmwJrD09weXd");
    } else if (color === "black") {
      setId("prod_nPEVlN9qrJ5a7d");
    }
  }, [color]);

  return (
    <div className={styles.rooster} id="rooster">
      <h1 className={styles.waterMark}>swoop</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div
            className={styles.column}
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <h1
              style={{
                transform: `translateX(${offsetY > animation ? 0 : -10}%)`,
                opacity: offsetY > animation ? 1 : 0,
                transition: "1s",
              }}
            >
              swoop
            </h1>
            <div className={styles.variants}>
              <h3>Color del logotipo:</h3>
              <div className={styles.selectorContainer}>
                <div
                  onClick={() => setColor("white")}
                  className={styles.variantSelector}
                  style={{
                    background: "white",
                    borderColor: color === "white" ? "#27a3d8" : "gray",
                  }}
                ></div>
                <div
                  onClick={() => setColor("black")}
                  className={styles.variantSelector}
                  style={{
                    background: "black",
                    borderColor: color === "black" ? "#27a3d8" : "gray",
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.quantity}>
              <h3>Cantidad:</h3>
              <div className={styles.quantityContainer}>
                <button
                  onClick={() => subtractQty()}
                  className={styles.quantityBtn}
                >
                  -
                </button>
                <div className={styles.quantityNum}>{quantity}</div>
                <button onClick={() => addQty()} className={styles.quantityBtn}>
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => addToCart()}
              className="primaryButton"
              style={{ display: "flex", height: "50px" }}
            >
              {loading ? (
                <div style={{ display: "flex", margin: "auto" }}>
                  <p style={{ margin: "auto 10px", color: "white" }}>
                    Añadiendo
                  </p>
                  <ClipLoader size={18} color="white" margin="auto" />
                </div>
              ) : (
                <div style={{ display: "flex", margin: "auto" }}>
                  <p style={{ margin: "auto 10px", color: "white" }}>
                    Añadir al carrito
                  </p>
                </div>
              )}
            </button>
          </div>
          <div
            className={styles.column}
            style={{
              position: isBreakpoint ? "absolute" : "relative",
              zIndex: 0,
              transform: `translateX(${isBreakpoint ? 20 : 0}%)`,
            }}
          >
            <div className={styles.circle}></div>
            <div className={styles.imgContainer}>
              <img src={renderImage()} draggable="false" />
            </div>
          </div>
          <div className={styles.column}>
            <div
              className={styles.statContainer}
              style={{
                transform: `translateX(${offsetY > animation ? 0 : 10}%)`,
                opacity: offsetY > animation ? 1 : 0,
                transition: "1s",
              }}
            >
              <div className={styles.statCard}>
                <div className={styles.numContainer}>
                  <h2>40</h2>
                  <h3>km/h</h3>
                </div>
                <p>de velocidad maxima.</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.numContainer}>
                  <h2>54</h2>
                  <h3>km</h3>
                </div>
                <p>de autonomía por carga.</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.numContainer}>
                  <h2>195</h2>
                  <h3>minutos</h3>
                </div>
                <p>Para obtener una carga completa.</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.numContainer}>
                  <h2>1000</h2>
                  <h3>Watts</h3>
                </div>
                <p>de potencia en el motor.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>SWOOP MOBILITY</p>
          <img src="/logo_swoop_circulo.webp" />
        </div>
      </div>
    </div>
  );
}
