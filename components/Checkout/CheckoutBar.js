import styles from "../../styles/Checkout/CheckoutBar.module.css";
import { commerce } from "../../utils/commerce";
import React, { useEffect } from "react";
import Image from "next/image";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import OrderConfirmation from "./OrderConfirmation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutBar({ token }) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);
  const [order, setOrder] = useState();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrder = (order) => {
    setOrderConfirmed(true);
    setOrder(order);
  };

  return (
    <div className={styles.checkoutBar}>
      <div>
        {orderConfirmed ? "" : <h2>Checkout</h2>}
        {orderConfirmed ? (
          <OrderConfirmation order={order} />
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              checkoutToken={token}
              handleOrder={handleOrder}
              order={order}
            />
          </Elements>
        )}
      </div>
    </div>
  );
}
