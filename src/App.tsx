import React from "react";
import "./CSS/App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import GameContextProvider from "./Context/GameContext";

function App() {
  return (
    <div className="App">
      <Header title="NUMBLE CLONE" />
      <GameContextProvider>
        <Body />
      </GameContextProvider>
    </div>
  );
}

export default App;
