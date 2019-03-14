import React from 'react';
import './index.css';

class Form extends React.Component{
	render(){
		
		if(this.props.click){
			return(
			<div>
				<div className="div1">
					<label className="label1"></label>
					<div>
						<input className="input" ref={input => this._username = input} value={this.props.username} onChange={this.updateU}  placeholder="Phone number, username or email"/>
					</div>	
				</div>

				<div className="div1">
					<label className="label2"></label>
					<div>
						<input className="input" ref={input => this._password = input} placeholder="Password"/>
					</div>	
				</div>

				<div className="div2">
					<button className="button1">Log in</button>
				</div>
			</div>
			);
		}
		else{
			return(
			<div>
				<div className="div1">
					<label className="label1"></label>
					<div>
						<input className="input" ref={input => this._username = input} value={this.props.username} onChange={this.updateU}  placeholder="Phone number, username or email"/>
					</div>	
				</div>

				<div className="div1">
					<label className="label2"></label>
					<div>
						<input className="input" ref={input => this._password = input} placeholder="Password"/>
					</div>	
				</div>

				<div className="div2">
					<button className="button2" disabled>Log in</button>
				</div>
			</div>
			);
		}
	}

	updateU=()=>{
		console.log(this._username.value);
		this.props.UU(this._username.value);
	}
}

export default Form;