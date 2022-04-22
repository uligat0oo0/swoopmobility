import styles from "../../styles/homeModules/Cart.module.css";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { commerce } from "../../utils/commerce";
import CartCard from "./CartCard";
import ClipLoader from "react-spinners/ClipLoader";

export default function Cart({
  setSideCart,
  sideCart,
  cart,
  retrieveCart,
  handleProceedToCheckout,
  loadingCheckout,
  isBreakpoint,
}) {
  const roosterHeight = isBreakpoint ? 1300 : 1300;
  const handleViewRooster = () => {
    window.scrollTo({ top: roosterHeight, behavior: "smooth" });
  };
  const emptyCart = async () => {
    await commerce.cart.empty();
    retrieveCart();
  };

  return (
    <div
      className={styles.cart}
      style={{
        transform: `translateX(${sideCart ? "0" : "100"}%)`,
        transition: ".5s",
      }}
    >
      <div className={styles.title}>
        <h3>Carrito</h3>
        <CgClose
          className={styles.closeIcon}
          onClick={() => setSideCart(false)}
        />
      </div>
      {cart
        ? cart.line_items.map((item) => (
            <CartCard key={item.id} item={item} retrieveCart={retrieveCart} />
          ))
        : ""}
      {cart && cart.total_items > 0 ? (
        <button
          onClick={() => {
            handleProceedToCheckout();
          }}
          style={{ width: "100%", display: "flex", height: "50px" }}
          className="primaryButton"
        >
          {loadingCheckout ? (
            <div style={{ display: "flex", margin: "auto" }}>
              <p style={{ margin: "auto 10px", color: "white" }}>Cargando</p>
              <ClipLoader size={18} color="white" margin="auto" />
            </div>
          ) : (
            <div style={{ display: "flex", margin: "auto" }}>
              <p style={{ margin: "auto 10px", color: "white" }}>Checkout</p>
            </div>
          )}
        </button>
      ) : (
        <div>
          <p style={{ marginTop: "30px" }}>Tu carito está vacio!</p>
          <button
            style={{ width: "100%", marginTop: "30px" }}
            className="primaryButton"
            onClick={() => handleViewRooster()}
          >
            Ver Swoop
          </button>
        </div>
      )}
    </div>
  );
}
