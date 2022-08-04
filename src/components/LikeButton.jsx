import React, { useState } from 'react'

export default function LikeButton() {
    const [counter, setCounter] = useState(0)


    const handleLikes = () => {
        let newCounter = setCounter(counter + 1)
        return newCounter
    }

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'brown', 'aqua', 'lightblue']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    let style = {
        backgroundColor: randomColor
    }





    return (

        <div className='btn-container'>
            <button onClick={handleLikes} style={style} className='like-btn'> {counter} Likes</button>
        </div>
    )
}
