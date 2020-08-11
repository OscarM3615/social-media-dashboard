import React from 'react'
import './css/Overview.css'
import SocialTracker from './SocialTracker'

/*
Overview - Today

Page Views
87
3%

Likes
52
2%

Likes
5462
2257%

Profile Views
52k
1375%

Retweets
117
303%

Likes
507
553%

Likes
107
19%

Total Views
1407
12%
*/

const Overview = () => {
	return (
		<div className="overview">
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
			<SocialTracker />
		</div>
	)
}

export default Overview
