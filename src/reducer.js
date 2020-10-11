export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  top_artists: null,
  discover_weekly: null,
  // token: null,

  // Remove after finishing development...
  // token:
  // "BQBXJmvkYH7aWaF7aPA_5MZ_T5TmvMJX-RvW6SBxU1CBqRHTnVirFNnk9i9cP11dJFZy_dGv0NIG97HlN6_3IssK9C-t1hL4cl6rhlUiz4cpJlXBShEY_54lBOT3xJuKBvx2AsvWoP73ju5TETPWbwykD2_ixC7jEV6RSqHc-AjiDTKITOiU",
};

// 1. state is how it currently looks
// 2. action is how we manipulate how the state looks
// 3. action -> type, [payload] .Now here Action has two things type and [payload] here square brackets means that payload is dynamic we can call it anywhere
// 4. now the type means case eg. 'SET_USER' and payload is user
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};

export default reducer;
