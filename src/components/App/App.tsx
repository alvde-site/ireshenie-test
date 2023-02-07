import React from "react";
import stylesApp from "./App.module.css";
import { AuthForm } from "./AuthForm/AuthForm";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={stylesApp.page}>
      <Header />
      <main>
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
