import React from "react";
import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import styles from "../../styles/Checkout/CheckoutForm/CheckoutForm.module.css";
import { commerce } from "../../utils/commerce";
import { useRouter } from "next/router";
import Summary from "./Summary";
import OrderTotal from "./OrderTotal";
import { FaLock } from "react-icons/fa";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function CheckoutForm({ checkoutToken, handleOrder }) {
  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const [shippingMethod, setShippingMethod] = useState({
    id: undefined,
    price: 0,
  });
  const [stripeErrorMessage, setStripeErrorMessage] = useState("");
  const [processingOrder, setProcessingOrder] = useState(false);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [allFieldsValid, setAllFieldsValid] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [errors, setErrors] = useState([]);
  const [orderData, setOrderData] = useState({
    name: undefined,
    lastName: undefined,
    email: undefined,
    address: undefined,
    countryCode: undefined,
    subdivision: undefined,
    zip: undefined,
    city: undefined,
    shipping_method: undefined,
  });
  const [valid, setValid] = useState({
    name: undefined,
    lastName: undefined,
    email: undefined,
    address: undefined,
    countryCode: undefined,
    subdivision: undefined,
    zip: undefined,
    city: undefined,
    shipping_method: undefined,
  });

  const orderSubtotal = checkoutToken
    ? checkoutToken.live.total_with_tax.raw
    : "";

  const orderTotal = checkoutToken
    ? Number(orderSubtotal) + Number(shippingMethod.price)
    : undefined;

  const handleCaptureCheckout = async () => {
    if (processingOrder) {
      return;
    }
    setPaymentFailed(false);
    setErrors("");
    setStripeErrorMessage("");
    const paymentMethodResponse = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (paymentMethodResponse.error) {
      // There was some issue with the information that the customer entered into the payment details form.
      setStripeErrorMessage(paymentMethodResponse.error.message);
      setProcessingOrder(false);
      return;
    }
    const data = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: orderData.name,
        lastname: orderData.lastName,
        email: orderData.email,
      },
      shipping: {
        name: `${orderData.name} ${orderData.lastName}`,
        street: orderData.address,
        town_city: orderData.city,
        county_state: orderData.state,
        postal_zip_code: orderData.zip,
        country: orderData.countryCode,
      },
      fulfillment: {
        shipping_method: orderData.shipping_method,
      },
      payment: {
        gateway: "stripe",
        stripe: {
          payment_method_id: paymentMethodResponse.paymentMethod.id,
        },
      },
    };
    try {
      const order = await commerce.checkout.capture(checkoutToken.id, data);
      handleOrder(order);
      setProcessingOrder(false);
    } catch (err) {
      setErrors(err.data.message);
      setPaymentFailed(true);
      setProcessingOrder(false);
      console.log(err);
    }
  };

  const handleUpdate = (type, value) => {
    orderData[type] = value;
    setOrderData({ ...orderData });
  };

  const handleShippingUpdate = (id, price) => {
    setShippingMethod({
      id: id,
      price: price,
    });
    orderData["shipping_method"] = id;
    setOrderData({ ...orderData });
  };

  const handleValidation = (type) => {
    if (orderData[type] === undefined) {
      return;
    } else if (orderData[type] !== "") {
      valid[type] = true;
      setValid({ ...valid });
    } else if (orderData[type] === "") {
      valid[type] = false;
      setValid({ ...valid });
    }
  };

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, region) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country: country, region: region }
    );

    setShippingOptions(options);
  };

  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken.id);
    }
  }, [checkoutToken]);

  useEffect(() => {
    if (orderData.countryCode) fetchSubdivisions(orderData.countryCode);
  }, [orderData.countryCode]);

  useEffect(() => {
    if (orderData.subdivision)
      fetchShippingOptions(checkoutToken.id, orderData.countryCode, "MX-QUE");
  }, [orderData.subdivision]);

  useEffect(() => {
    if (
      Object.values(valid).indexOf(undefined) > -1 ||
      Object.values(valid).indexOf(false) > -1
    ) {
      setAllFieldsValid(false);
    } else {
      setAllFieldsValid(true);
    }
  }, [valid]);

  const handleSubmit = () => {
    if (allFieldsValid === true && !processingOrder) {
      handleCaptureCheckout();
      setProcessingOrder(true);
    } else {
      setSubmitFail(true);
    }
  };

  useEffect(async () => {
    await checkoutToken;
    if (!checkoutToken) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.checkoutForm}>
      <Summary
        checkoutToken={checkoutToken}
        shippingMethod={shippingMethod}
        orderTotal={orderTotal}
        handleValidation={handleValidation}
        orderData={orderData}
      />
      <AddressForm
        orderData={orderData}
        handleUpdate={handleUpdate}
        shippingCountries={shippingCountries}
        shippingSubdivisions={shippingSubdivisions}
        shippingOptions={shippingOptions}
        handleValidation={handleValidation}
        valid={valid}
        submitFail={submitFail}
        handleShippingUpdate={handleShippingUpdate}
        shippingMethod={shippingMethod}
      />
      <PaymentForm />
      {checkoutToken ? (
        <OrderTotal
          total={checkoutToken.live.total_with_tax.formatted_with_symbol}
          subtotal={checkoutToken.live.total.formatted_with_symbol}
          shippingMethod={shippingMethod}
          orderTotal={orderTotal}
        />
      ) : (
        <OrderTotal />
      )}
      {checkoutToken ? (
        <button
          onClick={() => handleSubmit()}
          className={allFieldsValid ? "primaryButton" : "primaryButton locked"}
        >
          <div>
            {processingOrder
              ? "Procesando orden"
              : `Pagar $${Number(orderTotal)
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`}
            {processingOrder ? "" : <FaLock className={styles.lockIcon} />}
            {processingOrder ? (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              ""
            )}
          </div>
        </button>
      ) : (
        <div className={styles.buttonLoading}></div>
      )}
      {paymentFailed ? (
        <p className={styles.checkoutErr}>
          Ocurrio un error a la hora de procesar el pago, revise la información
          o intentelo más tarde.
        </p>
      ) : (
        ""
      )}
      {submitFail && !allFieldsValid ? (
        <p className={styles.checkoutErr}>
          ¡Ingrese la información faltante para continuar!
        </p>
      ) : (
        ""
      )}
      <p className={styles.checkoutErr}>{stripeErrorMessage}</p>
    </div>
  );
}
