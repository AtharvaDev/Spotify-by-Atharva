import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import Header from "../header/Header";
import "./Body.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from "../songrow/SongRow";

function Body({ spotify }) {
  const [
    { discover_weekly, curr_playlist, playing },
    dispatch,
  ] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1DX6mvEU1S6INL`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    console.log("id", id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((r) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("rrrrrrr", r.item);
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        {playing ? (
          <div className="body__info">
            <img src={curr_playlist?.images[0]?.url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLISTS</strong>
              <h2>{curr_playlist?.name}</h2>
              <p>{curr_playlist?.description}</p>
            </div>
          </div>
        ) : (
          <div className="body__info">
            <img src={discover_weekly?.images[0]?.url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLISTS</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          {playing ? (
            <FavoriteIcon className="body__icongreen" fontSize="large" />
          ) : (
            <FavoriteIcon fontSize="large" />
          )}
          <MoreHorizIcon />
        </div>
      </div>
      {console.log(curr_playlist)}
      {playing ? (
        // console.log("true")
        <iframe
          src={`https://open.spotify.com/embed/playlist/${curr_playlist.id}`}
          width="100%"
          height="100%"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      ) : (
        // console.log("false")
        <iframe
          src={`https://open.spotify.com/embed/playlist/37i9dQZF1EuDOgggayKIWm`}
          width="100%"
          height="100%"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}

      {/* list of songs  */}
      {/* {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))} */}
    </div>
  );
}

export default Body;
