import React from "react";
import stylesApp from "./App.module.css";
import ChangePassword from "./ChangePassword/ChangePassword";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={stylesApp.page}>
      <Header />
      <main>
        <ChangePassword />
      </main>
      <Footer />
    </div>
  );
}

export default App;
