import React, { useState } from 'react'

export default function ClickablePicture(props) {
    const { img, imgClicked } = props

    const [image, setImage] = useState(true)
    //console.log(img)

    const handleToggle = () => {
        setImage(prev => !prev)
    }
    return (
        <div>
            <img onClick={() => handleToggle()} src={image ? img : imgClicked} alt="maxence" />
        </div>
    )
}
