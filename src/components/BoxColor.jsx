import React from 'react'

export default function BoxColor(props) {
    const { r, g, b } = props
    const rectangleStyle = {
        backgroundColor: `rgb( ${r}, ${g}, ${b} )`
    }
    return (
        <div className=''>
            <p className='rectangle-box' style={rectangleStyle} >rgb({r},{g},{b})</p>
        </div>
    )
}
