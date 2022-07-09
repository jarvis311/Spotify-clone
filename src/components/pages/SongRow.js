import React from 'react'
import '../../style/PlayerBody.css'
const SongRow = ({ track, playSong  }) => {
    console.log(track);
    return (
        <div className='song_row' onClick={() => playSong(track.id)}>
            <img className='songrow_img' src={track.album.images[0].url} alt="" />
            <div className="song_info">
                <h4>{track.name}</h4>
                <p>{track.artists.map(artist => artist.name).join(", ")} {track.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow