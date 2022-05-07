import Link from "next/link";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../../styles/Checkout/OrderConfirmation.module.css";
import ProductSummaryCard from "./ProductSummaryCard";
export default function OrderConfirmation({ order }) {

  const total = order ? order.order_value.raw : "";
  const subtotal = order ? order.order.subtotal.raw : "";
  const shipping = order ? order.order.shipping.price.raw : "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.orderConfirmation}>
      <FaCheckCircle className={styles.checkIcon} />
      <div className={styles.textContainer}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Estamos procesando tu orden</p>
        {order ? (
          <p>
            orden: <b>#{order.id}</b>
          </p>
        ) : (
          ""
        )}
      </div>
      {order
        ? order.order.line_items.map((item) => (
            <ProductSummaryCard
              key={item.id}
              image={item.image.url}
              name={item.name}
              quantity={item.quantity}
              price={item.line_total.formatted_with_symbol}
            />
          ))
        : ""}
      <div className={styles.orderTotal}>
        <div className={styles.row}>
          <p className={styles.label}>Subtotal:</p>
          <p>
            {" "}
            $
            {Number(subtotal)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
          </p>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Envío:</p>
          <p>
            $
            {Number(shipping)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.totalRow}>
          <p className={styles.totalLabel}>Total:</p>
          <p className={styles.totalPrice}>
            $
            {Number(total)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
          </p>
        </div>
      </div>
      <small>
        Hemos enviado un correo de confirmación a tu email, si no aparece
        porfavor revisar en la carpeta de promociones o spam.
      </small>
      <h3>Dirección de envío:</h3>
      {order ? (
        <div>
          <p>{order.shipping.name}</p>
          <p>{order.customer.email}</p>
          <p>
            {order.shipping.street}, {order.shipping.town_city},{" "}
            {order.shipping.country},
          </p>
          <p> {order.shipping.postal_zip_code}</p>
          <p>
            <b>{order.order.shipping.description}</b>
          </p>
        </div>
      ) : (
        ""
      )}
      <h3>Resumen de pago:</h3>

      {order
        ? order.transactions
            .map((item) => ({
              id: item.id,
              amount: item.amount.formatted_with_symbol,
              gateway_reference: item.gateway_reference,
              payment_source: item.payment_source.brand,
            }))
            .map((item) => (
              <div key={item.id} className={styles.transactions}>
                <p>total de orden: ${item.amount}</p>
                <p>tarjeta con terminación: {item.gateway_reference}</p>
              </div>
            ))
        : ""}

      <Link href="/">
        <button className="primaryButton">Regresar al inicio</button>
      </Link>
    </div>
  );
}
