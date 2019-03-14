import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './input.js';

class Login extends React.Component{

	state = {
		username : "",
		password : "",
		canClick : false
	}


	render(){
		return(
			<div className="Board">
		
				<div className="logo">Instagram</div>	
				<br></br>
				<br></br>
			

				<Form click={this.state.canClick} UU={this.updateusername} username={this.state.username}/>
			</div>
		);
	}

	updateusername=(update)=>{
		this.setState({
			username : update
		});


		if(this.state.username != ""){
			this.setState({
				canClick:true
			})
		}else{
			this.setState({
				canClick:false
			})
		}
	}
}



ReactDOM.render(<Login/>, document.getElementById('root'));
