import React, { PureComponent } from 'react';



class Post extends PureComponent {
	// 1 get the props

	// set state
	state = {
		title: "Creativity!!"
	}

	// componentWillMount(){
	// 	return(
	// 		console.log("Component will Mount!!")

	// 	)
	// }


	// componentDidMount(){
	// 	return(
			
	// 			console.log("Component did Mount!!")

	// 	)
	// }



	// componentWillUpdate(){
	// 	console.log('Component Will Update')
	// }

	// componentDidUpdate(){
	// 	console.log('Component Did Update')
	// }

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log(nextState)
	// 	return true;
	// }

	// componentWillReceiveProps(){
	// 	console.log('Receive Props')
	// }


	// componentWillUnmount(){
	// 	return(
	// 		console.log("Component will Unmount!!")

	// 	)
	// }

	render(){
		console.log('Render')
		return(
			<div>
			<h3>{this.state.title}</h3>
			<div onClick = { () => {
				this.setState({
					title:'Has already set State!'
				})}
			} >Click Me!</div>

			
			
		</div>
		)
	}

}


export default Post;