import React from "react";
import Champion from "./Champion";

const ChampionCard = (props: any) => {
  const filteredChampions = props.champions.filter((champion: any) => {
    return champion.name.toLowerCase().includes(props.search.toLowerCase());
    //   champion.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
  });
  return (
    <div style={{ background: "lemonchiffon" }}>
      {filteredChampions.map((champion: any) => (
        <Champion
          key={champion.id}
          name={champion.name}
          title={champion.title}
          id={champion.id}
          blurb={champion.blurb}
        />
      ))}
    </div>
  );
};

export default ChampionCard;
