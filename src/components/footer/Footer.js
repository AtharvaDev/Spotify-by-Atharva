import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumlogo"
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Yeahh!</h4>
          <p>user</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
