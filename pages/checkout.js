import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CheckoutBar from "../components/Checkout/CheckoutBar";
import styles from "../styles/Checkout/Checkout.module.css";
import { commerce } from "../utils/commerce";

export default function Checkout({
  token,
  setIsCheckout,
  isCheckout,
  setSideCart,
  useMediaQuery,
  offsetY,
  retrieveCart,
}) {
  const isBreakpoint = useMediaQuery(768);
  useEffect(() => {
    setIsCheckout(true);
    setSideCart(false);
  }, []);
  return (
    <div className={styles.checkout}>
      <Head>
        <title>Swoop | Checkout</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <script src="https://js.stripe.com/v3/"></script>
        <link rel="shortcut icon" href="/logo_swoop_circulo.webp" />
      </Head>
      <div className={styles.spacer}></div>
      <Header
        isCheckout={isCheckout}
        setSideCart={setSideCart}
        isBreakpoint={isBreakpoint}
        offsetY={offsetY}
      />
      <div className={styles.container}>
        <CheckoutBar token={token} retrieveCart={retrieveCart} />
      </div>
    </div>
  );
}
