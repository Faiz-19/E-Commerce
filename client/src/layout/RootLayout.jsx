import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from '../Context/ShopContext'

export default function RootLayout() {
  const { user, loading } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && user.role === 'admin') {
        navigate('/admin');
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      <ToastContainer />
    </>
  )
}
