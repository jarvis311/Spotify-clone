

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    spotify:null,
    top_artists: null,
    item: null,
    discover_weekly: null
    //    token:'BQD738nrm-seT2Igk5nTsfiul6E788efwzis5EKH9UMyiyAc2TJgLme3Sps_-eT7ouzCLrFh8HYJ6yqQEiwBjFnmsg0fH_CT-7ml7yVHQQdTBwkUfvwu0sovlEiW0uHvlE1kAdLYAhB_eMEgQErmL5zQ3Tdl-Q7SI209BNGhQGGNugoa2PHQWrC_4-tYjEVHqU0TV2HEw0PBufNCL46L'
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user }
        case "SET_TOKEN":
            return { ...state, token: action.token }
        case "SET_PLAYLIST":
            return { ...state, playlists: action.playlists }
        case "SET_DESCOVER_WEEKLY":
            return { ...state, discover_weekly: action.discover_weekly }
        case "SET_PLAYING":
            return { ...state, playing: action.playing };
        case "SET_ITEM":
            return { ...state, item: action.item };
        case "SET_TOP_ARTISTS":
            return { ...state, top_artists: action.top_artists };
        case "SET_SPOTIFY":
            return { ...state, spotify: action.spotify }

        default:
            return state;
    };
}


export default reducer;