import React from "react";
import "./champion.sass";

const Champion = ({ name, title, id, blurb }: any) => {
  // console.log(props);
  return (
    <div className="champion ui centered card">
      <div className="ui move reveal image">
        <div className="visible content">
          <img
            className="ui huge rounded image"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
          />
        </div>
        <div className="hidden content">
          <img
            className="ui huge rounded image"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_1.jpg`}
          />
        </div>
      </div>
      <div className="content">
        <h1 className=" huge Header">
          {name}
          <h3>{`${title[0].toUpperCase()}${title.slice(1, title.length)}`}</h3>
        </h1>
        <p style={{ fontSize: "1.4rem" }}>{`${blurb}`}</p>
      </div>
    </div>

    // <div className="ui grid">
    //   <div className="six wide column">
    //     <img
    //       className="ui huge rounded image"
    //       src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
    //     />
    //   </div>
    //   <div className="ten wide center aligned column">
    //     <h1 className=" huge Header">
    //       {name}:
    //       <h3>{`${title[0].toUpperCase()}${title.slice(1, title.length)}`}</h3>
    //     </h1>
    //     <p style={{ fontSize: "1.4rem" }}>{`${blurb}`}</p>
    //   </div>
    // </div>
  );
};

export default Champion;

// <div class="ui card">
//     <div class="ui move reveal image">
//       <div class="visible content">
//         <img class="ui fluid image" src="../assets/images/avatar/tom.jpg">
//       </div>
//       <div class="hidden content">
//         <img class="ui fluid image" src="../assets/images/avatar/nan.jpg">
//       </div>
//     </div>
//     <div class="content">
//       <img src="../assets/images/wireframe/paragraph.png" class="ui wireframe image">
//     </div>
//   </div>

// <div className="ui card">
//       <div className="ui move reveal image">
//       <div className="visible content">
//       <img
//           className="ui huge rounded image"
//           src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
//         />
//       </div>
//       <div className="hidden content">
//       <img
//           className="ui huge rounded image"
//           src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_1.jpg`}
//         />
//       </div>

//       </div>
//       <div className="content">
//         <h1 className=" huge Header">
//           {name}:
//           <h3>{`${title[0].toUpperCase()}${title.slice(
//             1,
//             title.length
//           )}`}</h3>
//         </h1>
//         <p style={{ fontSize: "1.4rem" }}>{`${blurb}`}</p>
//       </div>
//     </div>
