import LoginForm from "@/components/LoginForm";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import React from "react";

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LoginForm />
      <Footer></Footer>
    </div>
  );
};

export default Login;
