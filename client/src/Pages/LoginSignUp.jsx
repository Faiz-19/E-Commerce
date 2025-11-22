import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, register } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    let response;
    if (isLogin) {
      response = await login(email, password);
    } else {
      response = await register(name, email, password);
    }

    if (response.success) {
      if (response.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setError(response.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-pink-50 p-4">
      <div className="bg-white w-full max-w-md p-8">
        <h1 className="font-semibold text-2xl">
          {isLogin ? "Log In" : "Sign Up"}
        </h1>
        {error && <p className="text-red-500 text-center my-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5">
          {!isLogin && (
            <input
              className="border border-zinc-300 p-3"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            className="border border-zinc-300 p-3"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-zinc-300 p-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="bg-red-500 text-white p-3 cursor-pointer hover:bg-red-600"
            type="submit"
            value="Continue"
          />
        </form>
        <p className="text-zinc-500 mb-2">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="font-bold text-red-600 cursor-pointer ml-1"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>
        <div className="flex gap-3 items-center text-zinc-500">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </section>
  );
}
