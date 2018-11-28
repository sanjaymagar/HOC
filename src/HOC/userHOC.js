import React from 'react';


const UserHOC = (WrappedComponent, WrappedComponent2, WrappedComponent3, arg1) => {
	return (props) => (
		
		<div>
			{arg1}
			<WrappedComponent {...props} />
			<WrappedComponent2 {...props} />
			<WrappedComponent3 {...props} />
			
		</div>
	)
}

export default UserHOC;