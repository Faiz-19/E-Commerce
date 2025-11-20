import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ShopContext } from "../Context/ShopContext";
import PaymentForm from "./PaymentForm";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51SVceu3WQmiUd5WoHH8VYtJ6CMnJmGumFZRo2D0qDGIvgXfxDRIprN6trcAUV5jOiZU01i443QImMZ91NzvaIcTT00G8nBPJTE"
);

const Checkout = () => {
  const { cartItem, user } = useContext(ShopContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (user && Object.keys(cartItem).length > 0) {
      axios
        .post(
          "http://localhost:3000/api/order/payment",
          {},
          { withCredentials: true }
        )
        .then((res) => {
          setClientSecret(res.data.data.clientSecret);
        })
        .catch((err) => {
          console.error("Error getting payment intent", err);
        });
    }
  },[user,cartItem]);

  const options = {
    clientSecret,
    theme: "stripe"
  }

  return (
    <div className="my-10 flex justify-center">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      ) : (
        <div className="text-xl">Loading Checkout...</div>
      )}
    </div>
  );
};

export default Checkout;
