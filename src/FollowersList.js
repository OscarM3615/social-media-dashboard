import React from 'react'
import './css/FollowersList.css'
import Followers from './Followers'

const FollowersList = () => {
	return (
		<div className="followerslist">
			<Followers social="facebook" account="@nathanf" followers="1987" newFollowers="12" direction="up" />
			<Followers social="twitter" account="@nathanf" followers="1044" newFollowers="99" direction="up" />
			<Followers social="instagram" account="@realnathanf" followers="11k" newFollowers="1099" direction="up" />
			<Followers social="youtube" account="Nathan F." followers="8239" newFollowers="144" direction="down" />
		</div>
	)
}

export default FollowersList
