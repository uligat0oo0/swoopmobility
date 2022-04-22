import React from "react";
import styles from "../../styles/Checkout/CheckoutForm/ShippingBox.module.css";

export default function ShippingBox({
  shippingOptions,
  handleShippingUpdate,
  shippingMethod,
  valid,
  type,
  submitFail,
  handleValidation,
}) {
  const handleShippingSelect = (id, price) => {
    handleShippingUpdate(id, price);
    handleValidation(type);
  };
  return (
    <div className={styles.shippingBox}>
      {shippingOptions.length > 0 ? (
        ""
      ) : (
        <p>
          Selecciona tu país y estado para desplegar los metodos de envío
          disponibles.
        </p>
      )}

      {shippingOptions
        .map((item) => ({
          id: item.id,
          description: `${item.description}`,
          price: `${item.price.formatted_with_symbol}`,
          priceRaw: `${item.price.raw}`,
        }))
        .map((item) => (
          <div
            onClick={() => handleShippingSelect(item.id, item.priceRaw)}
            key={item.id}
            className={
              shippingMethod.id === item.id
                ? styles.shippingBoxCardSelected
                : styles.shippingBoxCard
            }
          >
            <p style={{ marginBottom: "10px" }}>{item.description}</p>
            <h3>{item.price}</h3>
          </div>
        ))}
      {valid[type] === false || (!valid[type] && submitFail) ? (
        <p className={styles.errorMessage}>
          ¡El método de envío no puede estar vacio!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
