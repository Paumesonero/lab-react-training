import React from 'react'
import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'

export default function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const imgType = type === 'Visa' ? visa : masterCard;
    //masking the number
    let lastFourNumbers = number.slice(-4);
    let maskedNumber = lastFourNumbers.padStart(number.length, '●');

    //getting year's last 2 digits
    let lastTwoNums = String(expirationYear).slice(-2);

    //style settup

    const backColor = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div className='each-credit-card' style={backColor}>
            <div className='visa-container'>
                <img src={imgType} alt="visa/mastercard image" className='visa-astercard' />
            </div>
            <p id='maskedNumber'>{maskedNumber}</p>
            <div className='bank-expiry'>
                <div className='expire'>
                    <p>Expires {expirationMonth}/{lastTwoNums}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>
    )
}
