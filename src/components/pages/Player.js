import React from 'react'
import '../../style/Player.css'
import PlayerBody from './PlayerBody'
import PlayerFooter from './PlayerFooter'
import PlayerSidebar from './PlayerSidebar'

// fetch the all spotify data from the app components using props...
const Player = ({ spotify }) => {
  return (
    <div className='player'>
      <div className="player_body">
        {/* sidebar */}
        <PlayerSidebar/>
        {/* body  */}
        <PlayerBody spotify={spotify}/>
      </div>
      {/* footer  */}
      <PlayerFooter spotify={spotify} />
    </div> 
  )
}

export default Player