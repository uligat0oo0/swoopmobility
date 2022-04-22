import React from "react";
import Input from "./Input";
import Select from "./Select";
import styles from "../../styles/Checkout/CheckoutForm/PaymentForm.module.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function PaymentForm() {
  const CARD_ELEMENT_OPTIONS = {
    hidePostalCode: true,
  };
  return (
    <div className={styles.PaymentForm}>
      <div className={styles.title}>
        <div className={styles.stepNum}>3</div>
        <h3>Ingresar detalles de pago</h3>
      </div>
      <div style={{ margin: "0 10px" }}>
        <label style={{ color: "lightgray" }}>
          Ingresa tu tarjeta de crédito o débito
        </label>
        <div
          style={{
            border: "1px solid lightgrey",
            margin: "10px 0 0 0",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>
    </div>
  );
}
