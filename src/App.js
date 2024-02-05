import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import SoccerLineUp from "react-soccer-lineup";
import { nanoid } from "nanoid";

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

  const [error, setError] = useState(null);
  const [homeTeam, setHomeTeam] = useState({
    squad: {
      df: [],
      fw: [],
      cam: [],
    },
    style: {
      color: `#${state.homeTeamColor}`,
      numberColor: `#${state.homeTeamNumberColor}`,
    },
  });

  const [number, setNumber] = useState(1);
  const [playerName, setPlayerName] = useState("");

  const playerRemove = (position, id) => {
    setHomeTeam((prevHomeTeam) => ({
      ...prevHomeTeam,
      squad: {
        ...prevHomeTeam.squad,
        [position]: prevHomeTeam.squad[position].filter(
          (player) => player.id !== id
        ),
      },
    }));
  };

  const addPlayer = () => {
    setError(null);

    if (playerName === "") {
      setError("Player Name required!");
      return;
    }

    const playerPositions = ["df", "fw", "cam"];
    const availablePositions = playerPositions.filter(
      (position) => homeTeam.squad[position].length < getMaxPlayers(position)
    );

    if (availablePositions.length === 0) {
      setError("All positions are full!");
      return;
    }

    const randomPosition =
      availablePositions[
        Math.floor(Math.random() * availablePositions.length)
      ];

    const playerObj = {
      id: nanoid(),
      number: number,
      name: playerName,
      color: `#${state.homeTeamColor}`,
      numberColor: `#${state.homeTeamNumberColor}`,
      nameColor: 'black',
    };

    playerObj.onClick = () => playerRemove(randomPosition, playerObj.id);

    setHomeTeam((prevHomeTeam) => ({
      ...prevHomeTeam,
      squad: {
        ...prevHomeTeam.squad,
        [randomPosition]: [...prevHomeTeam.squad[randomPosition], playerObj],
      },
    }));

    setNumber(number + 1);
    setPlayerName("");
  };

  const getMaxPlayers = (position) => {
    const maxPlayersMap = {
      gk: 1,
      df: 1, // Zagueiro
      fw: 3, // Atacante
      cam: 3, // Meia (cam)
    };

    return maxPlayersMap[position] || 0;
  };

  useEffect(() => {
    localStorage.setItem("homeTeam", JSON.stringify(homeTeam));
  }, [homeTeam]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundColor: "black",
            textAlign: "center",
            padding: "20px",
            minHeight: "100vh"
          }}
        >
          <h1 style={{ color: `#ffffff`, backgroundColor: `#4d4d4d`, padding: "10px", borderRadius: "5px"}}>
            Pelada Criticos FC
          </h1>
          <form
            style={{ color: "white", margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}
            onSubmit={(e) => {
              e.preventDefault();
              addPlayer();
            }}
          >
            <label htmlFor="playerName">NOME DO JOGADOR</label>
            <input
              type="text"
              className="form-control"
              id="playerName"
              placeholder="Jogador"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              style={{ width: "60%", height: "50px", marginBottom: "15px", marginTop: "15px"}}
            />
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </form>
          <SoccerLineUp
            size={"responsive"}
            color={"#4d4d4d"}
            pattern={"lines"}
            homeTeam={homeTeam}
          />
        </div>
      </div>
    </div>
  );
}
