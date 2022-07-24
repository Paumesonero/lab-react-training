import React from 'react'

export default function Rating(props) {
    let stars = ''

    // I'm sorry marina 🥷🏻👼🏽
    if (props.children >= 0 && props.children < 1) {
        stars = '☆☆☆☆☆'
    } else if (props.children >= 1 && props.children <= 1.49) {
        stars = '★☆☆☆☆'
    } else if (props.children >= 1.5 && props.children <= 2.49) {
        stars = '★★☆☆☆'
    } else if (props.children >= 2.5 && props.children <= 3.49) {
        stars = '★★★☆☆'
    } else if (props.children >= 3.5 && props.children <= 4.49) {
        stars = '★★★★☆'
    } else if (props.children >= 4.5 && props.children <= 5) {
        stars = '★★★★★'
    }
    return (
        <div>
            <p className='stars'>{stars}</p>
        </div>
    )
}
