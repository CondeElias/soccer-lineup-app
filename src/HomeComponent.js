import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import partidaDeFutebol from "./images/IMG-20240205-WA0059.jpg";

const HomeComponent = ({ onEnterClick, onRegisterClick }) => {
  return (
    <div>
      <img
        src={partidaDeFutebol}
        alt="Partida de Futebol"
        style={{ maxWidth: "100%", maxHeight: "400px", margin: "20px 0", borderRadius: "50%" }}
      />
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-primary"
          style={{ margin: "10px", width: "200px" }}
          onClick={onEnterClick}>
          Entrar
        </button>
        <br></br>
        <button
          className="btn btn-secondary"
          style={{ margin: "10px", width: "200px", backgroundColor: "black", border: "0" }}
          onClick={onRegisterClick}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
