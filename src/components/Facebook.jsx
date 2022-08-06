import React from 'react'
import profiles from '../data/berlin.json';

export default function Facebook() {
    console.log(profiles)
    return (
        <div className='facebook-main-box'>
            {profiles.map(el => {
                return (
                    <div className='facebook-container'>
                        <div>
                            <img src={el.img} alt={el.firstName} width='100px' />
                        </div>
                        <div>
                            <p><strong>First name:</strong> {el.firstName}</p>
                            <p><strong>Last name:</strong> {el.lastName}</p>
                            <p><strong>Country:</strong> {el.country}</p>
                            <p><strong>Type:</strong> {el.isStudent ? 'Student' : 'Teacher'}</p>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}
