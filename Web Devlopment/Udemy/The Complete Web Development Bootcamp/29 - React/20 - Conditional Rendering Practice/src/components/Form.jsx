import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="username" placeholder="username" />
      <Input type="password" placeholder="password" />
      {!props.isRegistered && <Input type="password" placeholder="password" />}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
