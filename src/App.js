import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import "./App.css";
import SoccerLineUp from "react-soccer-lineup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import PeladaComponent from "./PeladaComponent";
import HomeComponent from "./HomeComponent";
import RegisterComponent from "./RegisterComponent";


export default function App() {
  const [state] = useState({
    color: "588f58",
    pattern: "lines",
    showHomeTeam: true,
    showAwayTeam: false,
    homeTeamColor: "f08080",
    homeTeamNumberColor: "#000000",
    titleColor: "red",
    titleBackground: "grey",
  });

  const [currentPage, setCurrentPage] = useState("home");

  const renderComponent = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomeComponent
            onEnterClick={() => setCurrentPage("pelada")}
            onRegisterClick={() => setCurrentPage("cadastro")}
          />
        );
      case "cadastro":
        return (
          <RegisterComponent
            onRegister={(userData) => {
              // Adicione a lógica de registro aqui
              console.log("Registro:", userData);
            }}
          />
        );
      case "jogadores":
        return (
          <div>
            {/* Conteúdo da página Jogadores */}
          </div>
        );
      case "pelada":
        return <PeladaComponent />;
      default:
        return (
          <div>
            <p>Página não encontrada.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="menu">
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("cadastro")}>Cadastro</button>
        <button onClick={() => setCurrentPage("jogadores")}>Jogadores</button>
        <button onClick={() => setCurrentPage("pelada")}>Pelada</button>
      </div>
      <div className="container-fluid">
        <div
          className="col-12"
          style={{
            backgroundColor: "black",
            textAlign: "center",
            padding: "20px",
            minHeight: "100vh",
          }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}