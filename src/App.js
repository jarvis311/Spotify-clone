import { useEffect } from 'react';
import './App.css';
import Login from './components/Authantication/Login';
import { tokenFromUrl } from './components/Authantication/spotifyAuth';
import Player from './components/pages/Player';
import SpotifyWebApi from 'spotify-web-api-js'
import { useContextValue } from './DataLayer';



// This i scommunicate between the react and spotify 
const spotify = new SpotifyWebApi()


function App() {


  // set user in the context api using displatch if _token is available....
  const [{ user, token }, dispatch] = useContextValue();
  // get token from the url, calling function token() that create inside the spotifyAuth..
  useEffect(() => {
    const hash = tokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token;
    console.log('I am Token>>>>', _token);

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // thsi is goig to give access token to  the spotify , this is give to access the communication between the react and spotify
      spotify.setAccessToken(_token);

      // fetch the user details from the spotify, through the _token 
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      // Get the user Playlist from the spotify using bellow function...

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:'SET_PLAYLIST',
          playlists:playlists
        })
      });
      //Fetch playlist record from spotify using playlist id
      spotify.getPlaylist('0pFdzW1LlILQB1pDZZfwGy').then((response) => {
        dispatch({
          type:'SET_DESCOVER_WEEKLY',
          discover_weekly: response,
        })
      });

      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    }

  }, [token, dispatch])
  console.log('Users', user);
  console.log('TOken>>>>', token);

  return (
    <div className="App">
      {
        // passing spotify as props that we declare top on the app  
        token ?
          (<Player spotify={spotify} />)
          :
          (<Login />)
      }

    </div>
  );
}

export default App;


