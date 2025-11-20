import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/success",
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md border p-5 rounded shadow-lg"
    >
      <h2 className="text-2xl mb-5 font-semibold">Complete Payment</h2>
      <PaymentElement />
      <button
        disabled={isProcessing || !stripe || !elements}
        className="bg-black text-white w-full p-3 mt-5 rounded hover:bg-zinc-800 disabled:bg-gray-400"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && <div className="text-red-500 mt-2">{message}</div>}
    </form>
  );
};

export default PaymentForm;
