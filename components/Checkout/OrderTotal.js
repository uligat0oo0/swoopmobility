import styles from "../../styles/Checkout/CheckoutForm/OrderTotal.module.css";
import React from "react";

export default function OrderTotal({
  total,
  subtotal,
  shippingMethod,
  orderTotal,
}) {
  return (
    <div className={styles.orderTotal}>
      <div className={styles.row}>
        <p className={styles.label}>Subtotal:</p>
        <p>
          {subtotal ? subtotal : <div className={styles.loadingSubtotal}></div>}
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>Envío:</p>
        <p>
          {shippingMethod ? (
            "$" +
            Number(shippingMethod.price)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
          ) : (
            <div className={styles.loadingShipping}></div>
          )}
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.totalRow}>
        <p className={styles.totalLabel}>Total:</p>
        <p className={styles.totalPrice}>
          {orderTotal ? (
            "$" + orderTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
          ) : (
            <div className={styles.loadingTotal}></div>
          )}
        </p>
      </div>
    </div>
  );
}
