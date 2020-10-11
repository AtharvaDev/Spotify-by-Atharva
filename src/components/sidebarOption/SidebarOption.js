// match
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./SidebarOption.css";

function SidebarOption({ id, title, Icon }) {
  const [{ curr_playlist }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    // console.log(id);
    dispatch({
      type: "PLAY_PLAYLIST",
      curr_playlist: id,
      
    });
  };


  return (
    <div className="sidebarOption">
      {/* {console.log("curr_playlist",curr_playlist)} */}
      {Icon && <Icon className="sidebarOption_icon"></Icon>}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={() => playPlaylist(id)}>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
