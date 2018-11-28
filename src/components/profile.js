import React from 'react';
import { Link } from 'react-router-dom';



const Profile = (props) => {
	
	return(
		<div>
			<Link to = {{
				pathname: `${props.match.url}/post`
			}}>Post
			</Link>
			<h3> You can see and update your profile!!</h3>

			
			{props.match.params.id} - {props.match.params.username}

		</div>
	)
}


export default Profile;