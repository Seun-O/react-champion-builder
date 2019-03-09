import React, { Component } from "react";
import ChampionCard from "./components/ChampionCard";
import "./App.sass";

const champions = [
  {
    id: "aatrox",
    name: "Aatrox",
    title: "The Darkin Blade"
  },
  {
    id: "ahri",
    name: "Ahri",
    title: "The Nine-Tailed Fox"
  },
  {
    id: "akali",
    name: "Akali",
    title: "The First of Shaodw"
  }
];

class App extends Component {
  render() {
    return (
      <div className="">
        <h1>My Application</h1>
        <ChampionCard champions={champions} />
      </div>
    );
  }
}

export default App;
