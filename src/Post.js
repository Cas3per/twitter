import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { ChatBubbleOutline, Repeat } from '@material-ui/icons';


const Post = () => {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar />
        </div>

        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>DisplayName
                        <span className='post_headerSpecial'>
                            <VerifiedIcon className='post_badge'/>
                            @username
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>This is message</p>
                </div>
            </div>
            <img src='https://pbs.twimg.com/profile_images/1551576545516462081/0o9u7TJ__400x400.jpg' alt='' className='post_image'/>
            <div className='post_footer'>
                <ChatBubbleOutline  className='chatBubble'/>
                <Repeat />
                <FavoriteBorderIcon />
                <PublishIcon />
            </div>
        </div>
    </div>
  )
}

export default Post