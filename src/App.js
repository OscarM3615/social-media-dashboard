import React from 'react'
import './css/App.css'
import Header from './Header'
import FollowersList from './FollowersList'
import Overview from './Overview'
import Attribution from './Attribution'

const App = () => {
	const lightTheme = localStorage.getItem('light')
	if (lightTheme === 'true') {
		document.getElementById('root').classList.add('light')
	}

	return (
		<div className="app">
			<Header switchActivated={lightTheme} />
			<FollowersList />
			<Overview title="Overview - Today" />
			<Attribution name="Óscar Miranda" github="oscarmiranda3615" />
		</div>
	)
}

export default App
