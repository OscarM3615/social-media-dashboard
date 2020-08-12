import React from 'react'
import './css/Followers.css'

function Followers({ social, account, followers, newFollowers, direction }) {
	return (
		<div className={`followers__pane ${social}`}>
			<div className="topline"></div>

			<div className="info__container">
				<div className="account">
					<img src={`/images/icon-${social}.svg`} alt={account}/>
					<p>{account}</p>
				</div>
	
				<div className="followers__number">
					<h1>{followers}</h1>
					<p>{social === 'youtube' ? 'Subscribers' : 'Followers'}</p>
				</div>
				
				<div className={`followers__changes ${direction}`}>
					<img src={`/images/icon-${direction}.svg`} alt={direction} />
					{newFollowers} Today
				</div>
			</div>
		</div>
	)
}

export default Followers
