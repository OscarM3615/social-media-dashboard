import React from 'react'
import './css/SocialTracker.css'

const SocialTracker = ({ title, social, value, percentage, direction }) => {
	return (
		<div className="socialtracker">
			<div className="tracker__header">
				<p>{title}</p>
				<img src={`/images/icon-${social}.svg`} alt={social} />
			</div>
			<div className="tracker__content">
				<h1>{value}</h1>
				<div className={`tracker__progress ${direction}`}>
					<img src={`/images/icon-${direction}.svg`} alt={direction} />
					<p>{percentage}%</p>
				</div>
			</div>
		</div>
	)
}

export default SocialTracker
