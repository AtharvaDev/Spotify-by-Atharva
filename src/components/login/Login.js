import React, { useState } from "react";
import "./Login.css";
import { loginUrl } from "../../spotify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Button, ClickAwayListener, Tooltip } from "@material-ui/core";

function Login() {
  const [value, setvalue] = useState("workwith@atharva.ml");
  const [pass, setpass] = useState("atharva.ml");
  const [copied, setcopied] = useState("flase");
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="login__info">
        <h2>Important note by Developer</h2>
        <h4>
          If you dont have a Spotify email-id and password you can use this
        </h4>
        <br />
        <div className="login_cred">
          <h4>Email: </h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={value}
            onChange={({ target: { value } }) => setcopied("false")}
          />
          &nbsp;&nbsp;&nbsp;
            <CopyToClipboard onCopy={() => setcopied("true")} text={value}>
             
                <Button onClick={handleTooltipOpen} className="login__button">
                  Copy
                  <FileCopyIcon />
                </Button>

              {/* <button>Copy to clipboard with button</button> */}
            </CopyToClipboard>
          
        </div>
        <div className="login_cred">
          <h4>Password: </h4>&nbsp;&nbsp;&nbsp;
          <input
            value={pass}
            onChange={({ target: { value } }) => setcopied("false")}
          />
          &nbsp;&nbsp;&nbsp;
          <CopyToClipboard onCopy={() => setcopied("true")} text={pass}>
            <Tooltip title="Add" placement="right">
              <Button className="login__button">
                Copy
                <FileCopyIcon />
              </Button>
            </Tooltip>
            {/* <button>Copy to clipboard with button</button> */}
          </CopyToClipboard>
        </div>
        <br />
        <h5>Or else create a free new Spotify Account</h5>
      </div>
      <a href={loginUrl} target="_blank">
        Login with Spotify
      </a>
    </div>
  );
}

export default Login;
