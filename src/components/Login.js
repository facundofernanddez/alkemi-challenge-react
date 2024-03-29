import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate("");

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      <h2>Los campos no pueden estar vacios</h2>;
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      <h2>Debes escribir un email válido</h2>;
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      <h2>Credenciales inválidas</h2>;
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        <h2>Estás dentro!</h2>;
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/list");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/list" />}

      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electronico:</span> <br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña:</span> <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button className="btn  btn-success" type="submit">
          Ingresar
        </button>
      </form>
    </>
  );
};
