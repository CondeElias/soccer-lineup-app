import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import partidaDeFutebol from "./images/IMG-20240205-WA0059.jpg";

const RegisterComponent = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Adicione aqui a lógica para o registro (por exemplo, chame a função onRegister)
    // Certifique-se de validar os campos antes de prosseguir
    if (name && email && password && password === confirmPassword) {
      onRegister({ name, email, password });
    } else {
      // Lógica para lidar com campos inválidos ou senhas não coincidentes
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src={partidaDeFutebol}
          alt="Críticos Peladinea"
          style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "100%" }}/>
        <h1> Criticos <br></br> Peladinea</h1>
      </div>
      <h2>Cadastro</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
