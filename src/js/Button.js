import React from 'react'

import { Event } from './Tracking'

const Button = props => {

    function ClickHandler(event) {
        event.preventDefault()

        // Track event in Google Analytics
        Event('Homepage', 'Click', 'Footer contact')

        window.open(props.href, 'emailWindow')
    }

    return (
        <button onClick={ClickHandler} className='btn btn-primary' title={props.title}>{props.value}</button>
    )
}

export default Button
