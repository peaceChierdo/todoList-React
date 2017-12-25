import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class SignInOrSignUp extends Component {
	constructor (props){
		super(props)
		this.state = {
			selected:'signUp',
		}
	}

	switch (e) {
		this.setState({
			selected: e.target.value
		})
	}
	// switch1(e){  
	// 	console.log('signUp')
	// 	this.setState({
	// 		selected: e.target.value
	// 	})
	// 	console.log(this.state.selected)
	// 	console.log('end of signUp')
	// }
	// switch2(e){  //when click signIn:  
	// 	console.log('signIn')  
	// 	console.log('before: '+this.state.selected) //before signUp
	// 	this.setState({
	// 		selected: e.target.value
	// 	})
	// 	console.log('after: '+this.state.selected) //after signUp  this.setState放在最后执行？
	// 	console.log('end of signIn')
	// }



	render () {
		return (
			<div className="signInOrSignUp">

				<nav>
					<label>
						<input type="radio" value="signUp" //执行顺序是怎样的？
						  checked={this.state.selected === 'signUp'}
						  //checked={this.checktest.bind(this)}	
					  	  // Invalid value for prop `checked` on <input> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. 							  
						  onChange={this.switch.bind(this)} /> 
						sign Up
					</label>
					<label>
						<input type="radio" value="signIn"
						  checked={this.state.selected === 'signIn'}
						  //在uncheck->checked时 触发onChange
						  onChange={this.switch.bind(this)} />  
						Log In
					</label>
				</nav>

				<div className="panes">
					{this.state.selected === 'signUp' 
					? <SignUpForm formData={this.props.formData}
					  	onSubmit={this.props.onSignUp}
					  	onChange={this.props.onChange}
					  />
				    : null}
					{this.state.selected === 'signIn' 
					? <SignInForm formData={this.props.formData}
					 	  onSubmit={this.props.onSignIn}
					 	  onChange={this.props.onChange}
					    onForgotPassword={this.props.onForgotPassword}
					  /> 
					: null}
				</div>					
			</div>			
		)
	}


}