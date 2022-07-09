import React from 'react'
import { useContextValue } from '../../DataLayer'
import '../../style/PlayerBody.css'
import BodayHeader from './BodayHeader'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';



const PlayerBody = ({spotify}) => {
  const [{discover_weekly}, dispatch] = useContextValue();
  console.log('diw>>>>>',discover_weekly);

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:0pFdzW1LlILQB1pDZZfwGy`,
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
    spotify
      .play({
        uris: [`spotify:track:${id}`],
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









  return (
    <div className='playerBody'>
        <BodayHeader spotify={spotify}/>
        <div className="body_info">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>DIscover Wickely</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="bodySong">
            <div className="body_icon">
                <PlayCircleFilledOutlinedIcon onClick={playPlaylist} className='body_shuffle'/>
                <FavoriteBorderOutlinedIcon fontSize='large'/>
                <MoreHorizOutlinedIcon/>
            </div>
            {
              discover_weekly?.tracks.items.map(item => (
                <SongRow playSong={playSong} track = {item.track}/>
              ))
            }
        </div>
    </div>
  )
}

export default PlayerBody