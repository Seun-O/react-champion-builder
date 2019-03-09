import React from "react";
import Champion from "./Champion";

const ChampionCard = (props: any) => {
  return (
    <div style={{ background: "lemonchiffon" }}>
      {props.champions.map((champion: any) => (
        <Champion
          key={champion.id}
          name={champion.name}
          title={champion.title}
        />
      ))}
    </div>
  );
};

export default ChampionCard;
