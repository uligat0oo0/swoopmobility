import React from "react";
import styles from "../../styles/Checkout/ProductSummaryCard.module.css";

export default function ProductSummaryCard({ image, name, price, quantity }) {
  return (
    <div className={styles.productSummaryCard}>
      {image ? <img src={image} /> : <div className={styles.loadingImg}></div>}
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          {name ? (
            <p className={styles.name}>{name}</p>
          ) : (
            <div className={styles.loadingName}></div>
          )}
          {price ? (
            <p className={styles.price}>{price}</p>
          ) : (
            <div className={styles.loadingPrice}></div>
          )}
        </div>
        <div className={styles.quantity}>Cantidad: {quantity}</div>
      </div>
    </div>
  );
}
