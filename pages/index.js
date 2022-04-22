import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Hero from "../components/HomePageComponents/Hero";
import About from "../components/HomePageComponents/About";
import Rooster from "../components/HomePageComponents/Rooster";
import Contact from "../components/HomePageComponents/Contact";
import Cart from "../components/HomePageComponents/Cart";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Features from "../components/HomePageComponents/Features";
import FichaTecinica from "../components/HomePageComponents/FichaTecinica";
import Whatsapp from "../components/Whatsapp";

export default function Home({
  offsetY,
  setSideCart,
  sideCart,
  retrieveCart,
  cart,
  handleProceedToCheckout,
  token,
  setIsCheckout,
  isCheckout,
  useMediaQuery,
  loadingCheckout,
}) {
  const isBreakpoint = useMediaQuery(768);
  const router = useRouter();

  useEffect(() => {
    setIsCheckout(false);
    retrieveCart();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Swoop mobility</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>

        <link rel="shortcut icon" href="/logo_swoop_circulo.webp" />
      </Head>
      <Header
        offsetY={offsetY}
        setSideCart={setSideCart}
        cart={cart}
        isCheckout={isCheckout}
        isBreakpoint={isBreakpoint}
      />
      <Hero isBreakpoint={isBreakpoint} offsetY={offsetY} />
      <div style={{ background: "rgb(26, 28, 32)" }}>
        <About offsetY={offsetY} />
        <div style={{ background: "rgb(26, 28, 32)" }}>
          <Rooster
            retrieveCart={retrieveCart}
            setSideCart={setSideCart}
            offsetY={offsetY}
            isBreakpoint={isBreakpoint}
          />
          <Features />
          <FichaTecinica />
          <Contact isBreakpoint={isBreakpoint} setSideCart={setSideCart} />
          <Cart
            setSideCart={setSideCart}
            sideCart={sideCart}
            retrieveCart={retrieveCart}
            cart={cart}
            handleProceedToCheckout={handleProceedToCheckout}
            loadingCheckout={loadingCheckout}
            isBreakpoint={isBreakpoint}
          />
        </div>
      </div>
      <Whatsapp isBreakpoint={isBreakpoint} />
    </div>
  );
}
