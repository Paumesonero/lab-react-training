import React from 'react'

export default function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

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

            <p id='type-pos'>{type}</p>
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
