import React, { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'


export default function Dice(props) {
    const dices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
    let randomDice = dices[Math.floor(Math.random() * dices.length)]
    //console.log(randomDice)

    const [randomImg, setRamdomImg] = useState(randomDice)

    const timer = () => {
        setRamdomImg(diceEmpty)
        setTimeout(() => {
            setRamdomImg(randomDice)
        }, 1000)
    }

    return (
        <div>
            <img onClick={() => timer()} src={randomImg} width='150px' />
        </div>
    )
}
