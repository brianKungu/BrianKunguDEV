import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <div className="mx-auto">
        {/* <Navbar /> */}
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
