import React from 'react'
import './css/Switch.css'

const Switch = ({ activated, label }) => {
	const toggleTheme = () => {
		const themeSwitch = document.getElementById('themeSwitch')
		localStorage.setItem('light', themeSwitch.checked)
		document.getElementById('root').classList.toggle('light');
	}
	
	return (
		<div className="switchContainer">
			<label htmlFor="themeSwitch">{label}</label>
			<input id="themeSwitch" type="checkbox" className="switch" defaultChecked={activated === 'true'} onChange={toggleTheme} />
		</div>
	)
}

export default Switch
