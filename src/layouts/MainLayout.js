import React from "react";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className=" vw-100 vh-100">
      <Header />
      <div className="h-100 w-100 overflow-auto" style={{
        paddingTop:'88px'
      }}>{children}</div>
    </div>
  );
}

export default MainLayout;
