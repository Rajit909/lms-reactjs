import React from 'react'
import { useState } from 'react'

function LikeButton() {
    let styles = {
        textAlign: "center"
    }

    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0)

    let toggelLike = ()=>{
        setIsLiked(!isLiked)
        setLikes(likes+1)
    }

    let likeStyle = {
       color: "red"
    }

  return (
    <>
        <p style={styles}  onClick={toggelLike}>
            <p>Clikes = {likes}</p>
            {
                isLiked ? <i className='fa-solid fa-heart' style={likeStyle}></i> : <i class="fa-solid fa-thumbs-down"></i>
            }
            
        </p>
    
    </>
  )
}

export default LikeButton