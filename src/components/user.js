import React from 'react';
import UserHOC from '../HOC/userHOC';


const User = (props) => {
	console.log(props)
	return(
		<div>
			<h3> This is User Page!!</h3>
		</div>
	)
}

const User2 = (props) => {
	console.log(props)
	return(
		<div>
			<h3> This is User Page 2!!</h3>
		</div>
	)
}

const User3 = (props) => {
	console.log(props)
	return(
		<div>
			<h3> This is User Page 3!!</h3>
		</div>
	)
}


export default UserHOC(User, User2, User3, 'Hello world!');