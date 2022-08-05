import React, { useState } from 'react'

export default function Carousel(props) {
    const { images } = props
    const [image, setImage] = useState(0)
    console.log(image)

    const handleNext = () => {
        if (image === images.length - 1) {
            setImage(0)
        } else {
            setImage(image + 1)
        }
    }

    const handlePrev = () => {
        if (image === 0) {
            setImage(images.length - 1)
        } else {
            setImage(image - 1)
        }
    }

    return (
        <div>
            <img src={images[image]} alt="profile pictures" width='150px' />
            <div>
                <button onClick={handlePrev}>Previous👈🏽</button>
                <button onClick={handleNext}>Next 👉🏽</button>
            </div>


        </div>
    )
}
