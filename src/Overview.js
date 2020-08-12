import React from 'react'
import './css/Overview.css'
import SocialTracker from './SocialTracker'

/*
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

const Overview = ({ title }) => {
	return (
		<div className="overview">
			<h1>{title}</h1>

			<div className="trackers__container">
				<SocialTracker title="Page Views" social="facebook" value="87" percentage="3" direction="up" />
				<SocialTracker title="Likes" social="facebook" value="52" percentage="2" direction="down" />
				<SocialTracker title="Likes" social="instagram" value="5462" percentage="2257" direction="up" />
				<SocialTracker title="Profile Views" social="instagram" value="52k" percentage="1375" direction="up" />
				<SocialTracker title="Retweets" social="twitter" value="117" percentage="303" direction="up" />
				<SocialTracker title="Likes" social="twitter" value="507" percentage="553" direction="up" />
				<SocialTracker title="Likes" social="youtube" value="107" percentage="19" direction="down" />
				<SocialTracker title="Total Views" social="youtube" value="1407" percentage="12" direction="down" />
			</div>
		</div>
	)
}

export default Overview
