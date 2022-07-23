import React from 'react'

export default function Random(props) {
    const { min, max } = props
    let randomNumber = Math.floor(Math.random() * max) + 1
    return (
        <div className='greeting-random-box'>
            <p>Random value between {min} and {max} =  {randomNumber}</p>
        </div>
    )
}
