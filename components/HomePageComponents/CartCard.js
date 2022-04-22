import styles from "../../styles/homeModules/CartCard.module.css";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { commerce } from "../../utils/commerce";
import ClipLoader from "react-spinners/ClipLoader";

export default function CartCard({ item, retrieveCart }) {
  const [loading, setLoading] = useState(false);
  const increaseQty = async () => {
    setLoading(true);
    const quantity = item.quantity + 1;
    await commerce.cart.update(item.id, { quantity: quantity });
    retrieveCart();
    setLoading(false);
  };
  const decreaseQty = async () => {
    setLoading(true);
    const quantity = item.quantity - 1;
    await commerce.cart.update(item.id, { quantity: quantity });
    retrieveCart();
    setLoading(false);
  };
  const removeItem = async () => {
    setLoading(true);
    await commerce.cart.remove(item.id);
    retrieveCart();
    setLoading(false);
  };

  return (
    <div className={styles.cartCard} style={{ display: "flex" }}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <ClipLoader color={"white"} />
        </div>
      ) : (
        ""
      )}
      <CgClose className={styles.deleteIcon} onClick={() => removeItem()} />
      <img src={item.image.url} height="100px" />
      <div className={styles.infoContainer}>
        <p>{item.name}</p>
        <div className={styles.priceRow}>
          <p>
            <b>{item.line_total.formatted_with_symbol}</b>
          </p>
          <div className={styles.quantityContainer}>
            <div onClick={() => decreaseQty()} className={styles.quantityBtn}>
              <p>-</p>
            </div>
            <div className={styles.quantityNum}>{item.quantity}</div>
            <div onClick={() => increaseQty()} className={styles.quantityBtn}>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
