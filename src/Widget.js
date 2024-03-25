import React from 'react'
import './Wdiget.css'
import Search from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';


const Widget = () => {
  return (
    
    <div className='widgets'>
        <div className='widgets-input'>
            <Search className='widgets-SearchIcon'
            />
            <input type='text' placeholder='Search Twitter' />
        </div>
        <div className='widgetsContainer'>
            <h2>What's happening </h2>
          

          <TwitterTweetEmbed tweetId={"1321351808086798343"}
          />
          <TwitterTimelineEmbed 
              sourceType="profile"
              screenName="fllipx"
              options={{height: 400}}
          />
          <TwitterShareButton 
          url={''}
          options={{ text: "Join here for new Twitter updates"}}/>

        </div>
        
    </div>
        

    
  )
}

export default Widget