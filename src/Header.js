import React from 'react'
import './css/Header.css'
import Switch from './Switch'

const Header = ({ switchActivated }) => {

	return (
		<div className="header">
			<div className="text__container">
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 23,004</p>
			</div>

			<Switch activated={switchActivated} label="Dark Mode" />
		</div>
	)
}

export default Header
