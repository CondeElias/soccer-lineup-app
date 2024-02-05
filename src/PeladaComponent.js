import React, { useState } from "react";
import SoccerLineUp from "react-soccer-lineup";
import { nanoid } from "nanoid";

const PeladaComponent = () => {
  const [homeTeam, setHomeTeam] = useState({
    squad: {
      df: [],
      fw: [],
      cam: [],
    },
    style: {
      color: "#f08080",
      numberColor: "#000000",
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
    if (playerName === "") {
      alert("Player Name required!");
      return;
    }

    const playerPositions = ["df", "fw", "cam"];
    const availablePositions = playerPositions.filter(
      (position) => homeTeam.squad[position].length < getMaxPlayers(position)
    );

    if (availablePositions.length === 0) {
      alert("All positions are full!");
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
      color: "#f08080",
      numberColor: "#000000",
      nameColor: "black",
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
      df: 1,
      fw: 3,
      cam: 3,
    };

    return maxPlayersMap[position] || 0;
  };

  return (
    <div>
      <form
        style={{
          color: "white",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          addPlayer();
        }}>
        <label htmlFor="playerName">NOME DO JOGADOR</label>
        <input
          type="text"
          className="form-control"
          id="playerName"
          placeholder="Jogador"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{
            width: "60%",
            height: "50px",
            marginBottom: "15px",
            marginTop: "15px",
          }}
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
  );
};

export default PeladaComponent;
