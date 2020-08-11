import React from 'react'
import './css/App.css'
import Header from './Header'
import FollowersList from './FollowersList'
import Overview from './Overview'

const App = () => {
	return (
		<div className="App">
			<Header />
			<FollowersList />
			<Overview />
				{/* SocialTracker */}
		</div>
	)
}

export default App
