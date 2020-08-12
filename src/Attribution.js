import React from 'react'
import './css/Attribution.css'

const Attribution = ({ name, github }) => {
	return (
		<div className="attribution">
    		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
			Coded by <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">{name}</a>.
  		</div>
	)
}

export default Attribution
