import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./app/assets/css/App.css";
import "./app/assets/css/styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REAT_APP_PAYPAL_CLIENT_ID }}>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shop" element={<ShopPage />} />
          {/* <Route path="shop/products/:productName" element={<{ProductDetailPage}}/> */}
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
