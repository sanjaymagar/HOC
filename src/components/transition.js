import React, {Component} from 'react';



class Transition extends Component {
	
	state = {
			show:false,
		}

	render(){	
		return( 
			<div>
			{ this.state.show ? 
			<div style = {{
				background: 'red',
				height: '100px',
			}}>
			</div> : null 
			
		}
			</div>
		)	
	}
}
export default Transition;