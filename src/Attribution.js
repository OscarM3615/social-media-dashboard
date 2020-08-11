import React from 'react'
import './css/Attribution.css'

const Attribution = ({ name, github }) => {
	return (
		<div class="attribution">
    		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
			Coded by <a href={`https://github.com/${github}`} rel="noopener noreferrer">{name}</a>.
  		</div>
	)
}

export default Attribution
