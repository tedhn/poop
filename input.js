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
						<input className="input" ref="username" placeholder="Phone number, username or email" defaultValue={this.props.username}/>
					</div>	
				</div>

				<div className="div1">
					<label className="label2"></label>
					<div>
						<input className="input" ref="password" placeholder="Password"/>
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
						<input className="input" ref={input => this.asdf = input} value={this.props.username} onChange={this.update}  placeholder="Phone number, username or email"/>
					</div>	
				</div>

				<div className="div1">
					<label className="label2"></label>
					<div>
						<input className="input" ref="password" placeholder="Password"/>
					</div>	
				</div>

				<div className="div2">
					<button className="button2" disabled>Log in</button>
				</div>
			</div>
			);
		}
	}

	update=()=>{
		console.log(this.asdf.value);
		this.props.UU(this.asdf.value);
	}
}

export default Form;