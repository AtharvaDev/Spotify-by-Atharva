import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";

// this is a super object which is constanly responsible for any sort of interaction between our react app and spotify
const spotify = new SpotifyWebApi();

function App() {
  // Here the dataLayer is destructed to get user
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  //geting the token
  //run code based on a given condition
  //we can use multiple use effect
  //if url changes fire off this code
  useEffect(() => {
    const hash = getTokenFromUrl(); // this keeps a look at url
    const _token = hash.access_token; // this "_" is a industry standard or naming convention used to mark temp var,int,etc

    window.location.hash = ""; //this will hide the token from url and thus imporve security reasons

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //it is basically giving access token to that spotify api. so it is saying here is magic key that will allow you to safely allow you to interact with spotify services

      // 1. getme() gets the user account and returns promise. this is like a async call
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX6mvEU1S6INL").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });
    }

    // console.log("I have a token", token);
  }, []); // this empty brackets tells us to run once the component loads

  // console.log(":☺", user);
  // console.log(":☺", token);
  // console.log(":☺", playlists);
  // console.log(":☺", top_artists);


  return (
    <div className="app">
      {/* this is ternary operator🔽 */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
