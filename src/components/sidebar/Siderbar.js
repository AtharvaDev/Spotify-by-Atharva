import React from "react";
import SidebarOption from "../sidebarOption/SidebarOption";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";

function Siderbar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  let noplaylist;
  if (playlists == false ) {
    noplaylist = <SidebarOption title="Your playlist is empty visit open.spotify.com to create your playlists" />
  }

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {console.log("my list", playlists)}

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      
      {noplaylist }

    </div>
  );
}

export default Siderbar;
