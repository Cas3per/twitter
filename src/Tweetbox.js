import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './Tweetbox.css'
import db from './firebase'

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')


  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: "Phil",
      userName:"fllipx",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/media/GJGcwIMa0AA6Kfe?format=jpg&name=4096x4096"
        })
    setTweetMessage('')
    setTweetImage('')
  }


  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar 
                    src='https://pbs.twimg.com/profile_images/1551576545516462081/0o9u7TJ__400x400.jpg' />
                <input 
                onChange={(e) => setTweetMessage(e.target.value)} 
                value={tweetMessage}
                type='text' placeholder='Whats happening' />

            </div>
            <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
                  className='tweetBox_ImageInput' placeholder='optional: Enter image URL'
            />

            <Button onClick={sendTweet}
            className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox