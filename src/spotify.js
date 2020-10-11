// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// click login button which then redirects to to this link.
export const authEndpoint = "https://accounts.spotify.com/authorize";

//after login redirect to home page on this url
// const redirectUri = "http://localhost:3000/";

const redirectUri = "https://spotify-by-ad.web.app/";

// scopes are permission given to my website once the user log's in
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//unique for every developer availabe on sotify for developers
const clientId = "650a324ee6b34bba8d38fe371b858289";

export const getTokenFromUrl = () => {
  //#accesstoken=mysupersecretkey&name=atharva&blablalala  <== example string from return( window.location.hash)
  //goes to the loaction that is url and the gets everting after (hash)#
  return window.location.hash // The hash property sets or returns the anchor part of a URL, including the hash sign (#).
    .substring(1) // The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. here # is removed from url
    .split("&") // The split() method is used to split a string into an array of substrings, and returns the new array.
    .reduce((initial, item) => {
      //The reduce() method executes a provided function for each value of the array (from left-to-right)
      //the code runs 3 times as there are three arrays in item. item holds all the current arrays
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); //this will create a new object
      return initial; // returns the object created in above line
    }, {}); //this is an empty object which is telling how to inital should start);
};

// this is the url which is triggered when login button is pressed
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
