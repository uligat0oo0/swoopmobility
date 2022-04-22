import React from "react";
import styles from "../../styles/Checkout/CheckoutForm/Select.module.css";

export default function Select({
  label,
  options,
  type,
  handleUpdate,
  handleValidation,
  defaultOption,
  valid,
  submitFail,
  width,
}) {
  const handleSelect = (type, e) => {
    handleUpdate(type, e.target.value);
    handleValidation(type);
  };
  return (
    <div className={styles.selectContainer} style={{ width: width }}>
      <label>{label}</label>
      <select
        onChange={(e) => handleSelect(type, e)}
        onClick={(e) => handleSelect(type, e)}
      >
        {" "}
        <option value="" disabled selected>
          {defaultOption}
        </option>
        {Object.entries(options)
          .map(([code, name]) => ({ id: code, label: name }))
          .map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
      </select>
      {valid[type] === false || (!valid[type] && submitFail) ? (
        <p className={styles.errorMessage}>¡Tu {label} no puede estar vacio!</p>
      ) : (
        ""
      )}
    </div>
  );
}
