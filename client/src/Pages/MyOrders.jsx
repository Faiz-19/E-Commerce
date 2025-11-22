import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(ShopContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/order/myorders",
          {
            withCredentials: true,
          }
        );
        setOrders(res.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user)
    return <div className="text-center mt-10">Please login to view orders</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 my-10 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-zinc-500">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-zinc-200 rounded-lg p-6 shadow-sm bg-white"
            >
              <div className="flex flex-col md:flex-row justify-between border-b border-zinc-100 pb-4 mb-4 gap-4">
                <div>
                  <p className="text-sm text-zinc-500">Order ID</p>
                  <p className="font-medium text-zinc-800 break-all">
                    {order._id}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Date</p>
                  <p className="font-medium text-zinc-800">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Status</p>
                  <p className="font-medium text-blue-600">{order.status}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Total Amount</p>
                  <p className="font-bold text-lg text-zinc-800">
                    ${order.amount.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="text-sm text-zinc-600">
                <p className="mb-2 font-semibold">
                  Items ({Object.values(order.items).reduce((a, b) => a + b, 0)}
                  ):
                </p>
                <div className="flex gap-2 flex-wrap">
                  {/* Since we store {id: qty}, we just show raw data for simple version */}
                  {Object.entries(order.items).map(
                    ([itemId, qty]) =>
                      qty > 0 && (
                        <span
                          key={itemId}
                          className="bg-zinc-100 px-3 py-1 rounded"
                        >
                          Product ID: {itemId}{" "}
                          <span className="text-zinc-400">x</span> {qty}
                        </span>
                      )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
