import React from "react";
import "./CSS/App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import GameContextProvider from "./Context/GameContext";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <Header title="NUMBLE CLONE" />
      <GameContextProvider>
        <Body />
        <Keyboard />
      </GameContextProvider>
      <p>Cloned by Izaaak Chater</p>
    </div>
  );
}

export default App;
