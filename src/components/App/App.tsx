import React from "react";
import stylesApp from "./App.module.css";
import { AuthForm } from "./AuthForm/AuthForm";

function App() {
  return (
    <div className={stylesApp.page}>
      <header></header>
      <main>
        <AuthForm />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
