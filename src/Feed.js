import React, { useState } from 'react'
import './App.css'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'

const Feed = () => {
  const image1 = "https://pbs.twimg.com/media/GJdsNFMWkAAJ8b9?format=jpg&name=large"
  const image2 = "https://pbs.twimg.com/media/GJdlqAKWIAAYOPj?format=jpg&name=medium"
  const image3 = "https://pbs.twimg.com/media/GJdixgoWkAAwlEg?format=jpg&name=900x900"
  return (
    <div className='feed'>
        {/* Home */}
        <div className="feed-header">

        {/* Tweetbox */}
            <h2>Home</h2>
        </div>

        <Tweetbox />
        
        {/* post */}

        <Post />
        <Post />
        <Post />
        <Post />
        <Post/>



    </div>
  )
}

export default Feed