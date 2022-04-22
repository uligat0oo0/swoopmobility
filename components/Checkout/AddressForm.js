import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import styles from "../../styles/Checkout/CheckoutForm/AddressForm.module.css";
import ShippingBox from "./ShippingBox";

export default function AddressForm({
  handleUpdate,
  shippingCountries,
  shippingSubdivisions,
  shippingOptions,
  handleValidation,
  valid,
  submitFail,
  handleShippingUpdate,
  shippingMethod,
  orderData,
}) {
  return (
    <div className={styles.AddressForm}>
      <div className={styles.title}>
        <div className={styles.stepNum}>1</div>
        <h3>Ingresar detalles de envío</h3>
      </div>
      <div className={styles.formContainer}>
        <Input
          label={"Nombre"}
          handleUpdate={handleUpdate}
          type="name"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Input
          label={"Apellido"}
          handleUpdate={handleUpdate}
          type="lastName"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Input
          label={"Dirección"}
          handleUpdate={handleUpdate}
          type="address"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="100%"
          orderData={orderData}
        />
        <Select
          label={"País"}
          options={shippingCountries}
          handleUpdate={handleUpdate}
          type="countryCode"
          handleValidation={handleValidation}
          defaultOption="Selecciona un país"
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Select
          label={"Estado"}
          options={shippingSubdivisions}
          handleUpdate={handleUpdate}
          type="subdivision"
          handleValidation={handleValidation}
          defaultOption="Selecciona un estado"
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Input
          label={"Ciudad"}
          handleUpdate={handleUpdate}
          type="city"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Input
          label={"Código Postal"}
          handleUpdate={handleUpdate}
          type="zip"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="50%"
          orderData={orderData}
        />
        <Input
          label={"Correo electrónico"}
          handleUpdate={handleUpdate}
          type="email"
          handleValidation={handleValidation}
          valid={valid}
          submitFail={submitFail}
          width="100%"
          orderData={orderData}
        />
        <div className={styles.title}>
          <div className={styles.stepNum}>2</div>
          <h3>Selecciona un método de envío</h3>
        </div>
        <ShippingBox
          shippingOptions={shippingOptions}
          handleUpdate={handleUpdate}
          handleShippingUpdate={handleShippingUpdate}
          shippingMethod={shippingMethod}
          handleValidation={handleValidation}
          valid={valid}
          type="shipping_method"
          submitFail={submitFail}
        />
      </div>
    </div>
  );
}
