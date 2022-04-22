import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/Checkout/CheckoutForm/Input.module.css";

export default function Input({
  label,
  handleUpdate,
  type,
  maxLength,
  handleValidation,
  valid,
  submitFail,
  width,
  orderData,
  placeholder,
}) {
  const [focused, setFocused] = useState(undefined);

  const handleInput = (e) => {
    handleUpdate(type, e.target.value);
    handleValidation(type);
  };
  return (
    <div className={styles.inputContainer} style={{ width: width }}>
      <label>{label}</label>
      <input
        onClick={(e) => handleInput(e)}
        onChange={(e) => handleInput(e)}
        maxLength={maxLength}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />
      {(valid[type] === false && !focused) ||
      (!valid[type] && submitFail && !focused) ? (
        <p className={styles.errorMessage}>¡Tu {label} no puede estar vacio!</p>
      ) : (
        ""
      )}
    </div>
  );
}
