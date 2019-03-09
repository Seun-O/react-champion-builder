import axios from "axios";

export default axios.create({
  baseURL:
    "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json"
});
