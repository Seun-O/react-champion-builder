import React, { Component } from "react";
import ChampionCard from "./components/ChampionCard";
import "./App.sass";
import SearchBar from "./components/SearchBar";
import championapi from "./components/api/championapi";
import axios from "axios";

class App extends Component {
  state = { search: "", championObject: [] };
  onSearch = (e: any) => {
    this.setState({ search: e });
  };

  componentDidMount() {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json"
      )
      .then(response => {
        this.setState({ championObject: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    let championKey = Object.keys(this.state.championObject);
    let champion = championKey.map((key: any) => {
      return this.state.championObject[key];
    });

    return (
      <div className="ui container">
        <h1>My Application</h1>
        <SearchBar onSearch={this.onSearch} />
        <ChampionCard champions={champion} search={this.state.search} />
      </div>
    );
  }
}

export default App;
