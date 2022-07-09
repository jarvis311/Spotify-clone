import React from 'react'
import '../../style/bodyHeader.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useContextValue } from '../../DataLayer';
const BodayHeader = () => {
    const [{user}, dispatch] = useContextValue();

  return (
    <div className='bodyHeader'>
        <div className="header_left">
            <SearchIcon/>
            <input type="text" placeholder='Search for Artists, soong..' />
            
        </div>

        <div className="header_right">
            <Avatar src='' /> 
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default BodayHeader