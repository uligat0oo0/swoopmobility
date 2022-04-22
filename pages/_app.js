import "../styles/globals.css";
import { commerce } from "../utils/commerce";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  const [sideCart, setSideCart] = useState(false);
  const [cart, setCart] = useState();
  const [token, setToken] = useState();
  const router = useRouter();
  const [isCheckout, setIsCheckout] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const generateToken = async () => {
    retrieveCart();
    const response = await commerce.checkout.generateTokenFrom("cart", cart.id);
    setToken(response);
  };

  const handleProceedToCheckout = async () => {
    if (loadingCheckout) {
      return;
    } else {
      setLoadingCheckout(true);
      await generateToken();
      router.push("/checkout");
      setLoadingCheckout(false);
    }
  };

  const retrieveCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  0;
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", (e) => updateTarget(e));

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", (e) => updateTarget(e));
    }, []);

    return targetReached;
  };

  useEffect(() => {
    retrieveCart();
  }, []);

  useEffect(() => {
    setSideCart(false);
  }, [offsetY]);

  return (
    <Component
      {...pageProps}
      offsetY={offsetY}
      sideCart={sideCart}
      setSideCart={setSideCart}
      retrieveCart={retrieveCart}
      cart={cart}
      token={token}
      handleProceedToCheckout={handleProceedToCheckout}
      setIsCheckout={setIsCheckout}
      isCheckout={isCheckout}
      useMediaQuery={useMediaQuery}
      loadingCheckout={loadingCheckout}
    />
  );
}

export default MyApp;
