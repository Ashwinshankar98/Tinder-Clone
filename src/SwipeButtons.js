import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    return (
        <div className='buttonsContainer'>
            <IconButton className='button_replay'>
                <ReplayIcon
                
                fontSize='large'
                />
            </IconButton>
            <IconButton className='button_close'>
                <CloseIcon
                
                fontSize='large'
                />
            </IconButton>
            <IconButton className='button_starrate'>
                <StarRateIcon
                
                fontSize='large'
                />
            </IconButton>
            <IconButton className='button_favourite'>
                <FavoriteIcon
                
                fontSize='large'
                />
            </IconButton>
            <IconButton className='button_flashon'>
                <FlashOnIcon
                
                fontSize='large'
                />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
