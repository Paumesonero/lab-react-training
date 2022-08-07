import React, { useState } from 'react'
import profiles from '../data/berlin.json';
//ITERATION 14 NOT FINISHED YET.
export default function Facebook(props) {
    const [profilesArr, setProfilesArr] = useState(profiles)
    const [color, setColor] = useState('white')
    //console.log(profiles)

    // filtering the countries so we can create one button per country.
    const uniqueCountries = [];
    const unique = profiles.filter(el => {
        const isDuplicate = uniqueCountries.includes(el.country);

        if (!isDuplicate) {
            uniqueCountries.push(el.country)
            return true
        }
        return false
    })
    //console.log(uniqueCountries)

    // handeling what happends when clicking the buttons.

    const handleCountryBtn = (e) => {
        console.log(e)
        const filteredProfiles = profiles.filter(el => {
            return el.country === e
        });

        if (filteredProfiles) {
            setColor('blue')
        }
        setProfilesArr(filteredProfiles)

    }

    return (
        <div className='facebook-main-box'>
            <div>
                {uniqueCountries.map(el => {
                    return (
                        <button onClick={() => handleCountryBtn(el)} value={el}  >{el}</button>
                    )
                })}
            </div>

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
