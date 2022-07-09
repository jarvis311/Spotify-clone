import React, { useEffect } from 'react'
import '../../style/footer.css'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import { useContextValue } from '../../DataLayer';

const PlayerFooter = ({spotify}) => {

  const [{ item, playing }, dispatch] = useContextValue();
  
  useEffect(() => {

    const getPlayList = () => {
      spotify.getMyCurrentPlaybackState().then((r) => {
        dispatch({
          type: "SET_PLAYING",
          playing: r.is_playing,
        });
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
      });
    }
    getPlayList();

  }, [spotify, dispatch]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  }


  return (
    <div className='footer'>
      <div className="footer_left">
        <img src="https://i.scdn.co/image/ab67616d0000b273e0129ac6975a3a8b658f708b" alt="" className="song_logo" />
        {item ? (
          <div className="footer_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer_center">
        <ShuffleOutlinedIcon  className='footer_green' />
        <SkipPreviousOutlinedIcon onClick={skipNext} className='footer_icon' />
        {
          playing ? (

            <PlayCircleFilledWhiteOutlinedIcon 
            fontSize='large'
            onClick={handlePlayPause}
            className='footer_icon' />
          ) : (
            <PlayCircleFilledWhiteOutlinedIcon 
            fontSize='large'
            onClick={handlePlayPause}
            className='footer_icon' />
          )
        }

        <SkipNextOutlinedIcon  onClick={skipPrevious} className='footer_icon' />
        <RepeatRoundedIcon className='footer_green' />

      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon/>
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon/>
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider"/>
          </Grid>
        </Grid>
      </div>
      
    </div>
  )
}

export default PlayerFooter