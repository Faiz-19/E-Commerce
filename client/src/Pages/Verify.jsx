import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("redirect_status");
  const navigate = useNavigate();
  const { setCartItem } = useContext(ShopContext);

  useEffect(() => {
    const verifyPayment = async () => {
      if (success === "succeeded") {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/order/verify",
            { success: "true" },
            { withCredentials: true }
          );

          if (response.data.success) {
            setCartItem({});
            toast.success("Payment is successful")
            navigate("/myorders");
          } else {
            navigate("/");
            toast.error("Payment failed")
          }
        } catch (error) {
          console.log(error);
          toast.error("Payment failed")
          navigate("/");
        }
      } else {
        toast.error("Payment failed")
        navigate("/");
      }
    };

    verifyPayment();
  }, []);
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="w-24 h-24 border-4 border-zinc-200 border-t-green-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Verify;
