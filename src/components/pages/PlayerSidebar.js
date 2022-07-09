import React from 'react'
import '../../style/PlayerSidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useContextValue } from '../../DataLayer';

const PlayerSidebar = () => {

  // fetch play;ist from app.js compnents as a object
  const [{playlists}, dispatch] = useContextValue();
  console.log('PlayLists>>>>',playlists);
  return (
    <div className='playerSidebar'>
      <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="no mage" />
      <SidebarOption title="Home"  Icon={HomeOutlinedIcon}/> 
      <SidebarOption title="Search" Icon={SearchOutlinedIcon}/> 
      <SidebarOption title="Your Librery" Icon={LibraryMusicOutlinedIcon}/> 

      <br />
      <strong className="playlist_heading">PLAYLISTS</strong>
      <hr />
     
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}

    </div>
  )
}

export default PlayerSidebar