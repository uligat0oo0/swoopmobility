import React from "react";
import styles from "../../styles/Checkout/Summary.module.css";
import OrderTotal from "./OrderTotal";
import ProductSummaryCard from "./ProductSummaryCard";

export default function Summary({ checkoutToken, shippingMethod, orderTotal }) {
  return (
    <div className={styles.summary}>
      <h3>Resumen de orden</h3>
      {checkoutToken ? (
        checkoutToken.live.line_items.map((item) => (
          <ProductSummaryCard
            key={item.id}
            image={item.image.url}
            name={item.name}
            quantity={item.quantity}
            price={item.line_total.formatted_with_symbol}
            shippingMethod={shippingMethod}
          />
        ))
      ) : (
        <ProductSummaryCard />
      )}
    </div>
  );
}
