import React from 'react'

export default function NumbersTable(props) {
    const { limit } = props
    const boxesArr = []

    const evenBoxStyle = {
        backgroundColor: 'red',
        width: 80,
        height: 80,
    }

    const oddBoxStyle = {
        backgroundColor: 'white',
        width: 80,
        height: 80,

    }

    for (let i = 1; i <= limit; i++) {

        if (i % 2 === 0) {
            boxesArr.push(<div key={i} style={evenBoxStyle} className='each-num'><p>{i}</p></div>)

        } else {
            boxesArr.push(<div key={i} style={oddBoxStyle} className='each-num'><p>{i}</p></div>)
        }
    }
    return (
        <div className='table-numbers'>{boxesArr}</div>
    )
}
