import React from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Siderbar from "../sidebar/Siderbar";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/* sidebar */}
        <Siderbar />

        {/* body  */}
        <Body spotify={spotify} />
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
}

export default Player;
