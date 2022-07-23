import React from 'react'

export default function Greetings(props) {
    const { children, lang } = props

    let language = ''
    switch (lang) {
        case 'de':
            language = 'Hallo';
            break;
        case 'fr':
            language = 'Bonjour'
            break;
        default:
            language = 'hello'
    }
    return (
        <div className='greeting-box'>
            <h3>{language + ' ' + children}</h3>
        </div>
    )
}
