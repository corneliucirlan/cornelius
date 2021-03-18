import React from 'react'

import { Event } from './../Tracking'
import Icon from './Icon'

const IconSocial = props => {

    function ClickHandler(event) {
    	event.preventDefault()

        // Track event in Google Analytics
        if (props.name === 'mail')
                Event('Homepage', 'Click', 'Header contact')
            else
                Event('Homepage', 'Click', `Icon ${props.name}`)

        window.open(props.href, '_blank')
    }

    return (
        <li className='social-icon'>
        	<a onClick={ClickHandler} href={props.href} title={props.title} rel='noopener noreferrer'>
                <Icon name={props.name} />
        	</a>
        </li>
    )
}

export default IconSocial
