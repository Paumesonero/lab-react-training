import React, { useState } from 'react'

export default function SignupPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    const handleEmail = (e) => {
        console.log(e.target.value)
        let value = e.target.value
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            setEmailMessage('You typed a valid email')
            // } else if (!regEx.test(email)) {
            //     setMessage('email not valid')
        } else {
            setEmailMessage('')
        }
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        let value = e.target.value
        if (value.length < 5) {
            setPasswordMessage(<p style={{ color: 'red' }}>Your password is too weak</p>)
        } else {
            setPasswordMessage(<p style={{ color: 'green' }}> Your password is valid</p>)
        }
        setPassword(e.target.value)
    }

    const handleNationality = (e) => {
        console.log(e.target.value)
        setNationality(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = { email, password, nationality }
    }

    let lang = '';
    switch (nationality) {
        case 'de':
            lang = 'Hallo'
            break;
        case 'en':
            lang = 'Hello'
            break;
        case 'fr':
            lang = 'Bonjour'
            break;
    }

    return (
        <div className='form-container'>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={email} onChange={(e) => handleEmail(e)} />
                    <p style={{ color: 'green' }}>{emailMessage}</p>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' value={password} onChange={(e) => handlePassword(e)} />
                    <p>{passwordMessage}</p>
                </div>
                <div>
                    <label htmlFor="">Nationality</label>
                    <select name="nationality" id="" value={nationality} onChange={(e) => handleNationality(e)}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>


                <button type='submit'>Submit</button>
                <hr />
                <p>{lang}</p>
                <p>Your email address is : {email}</p>

            </form>


        </div>
    )
}
