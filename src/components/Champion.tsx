import React from "react";

const Champion = ({ name, title }: any) => {
  // console.log(props);
  return (
    <React.Fragment>
      <div className="ui middle aligned selection list">
        <div className="item">
          <img
            className="ui medium rounded image"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}
          />
          <div className="content">
            <h1 className="Header">{name}</h1>
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Champion;
