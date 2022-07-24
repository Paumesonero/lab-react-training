import React from 'react'

export default function DriverCard(props) {
    const { name, rating, img, car } = props
    console.log(car.model)

    let driverStars = ''
    if (rating >= 0 && rating < 1) {
        driverStars = '☆☆☆☆☆'
    } else if (rating >= 1 && rating <= 1.49) {
        driverStars = '★☆☆☆☆'
    } else if (rating >= 1.5 && rating <= 2.49) {
        driverStars = '★★☆☆☆'
    } else if (rating >= 2.5 && rating <= 3.49) {
        driverStars = '★★★☆☆'
    } else if (rating >= 3.5 && rating <= 4.49) {
        driverStars = '★★★★☆'
    } else if (rating >= 4.5 && rating <= 5) {
        driverStars = '★★★★★'
    }


    return (
        <div className='each-driver'>
            <img src={img} alt="driver's picture" className='driver-pic' />
            <div>
                <p><strong>{name}</strong></p>
                <p>{driverStars}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
