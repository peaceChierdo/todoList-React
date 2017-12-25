import React, { Component } from 'react';
import './UserDialog.css';
import {signUp, signIn2, sendPasswordResetEmail} from './leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm'
// import SignInOrSignUp from './SignInOrSignUp'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class UserDialog extends Component{
	constructor(props){
		super(props)
		this.state = {
			selectedTab: '',
			formData: {
				email: '', 
				username: '',
				password: '',
			}
		}
	}

	signUp(e){
		e.preventDefault() //
		let {email, username, password} = this.state.formData
		let success = (user)=>{
			this.props.onSignUp.call(null, user)
		}
		let error = (error)=>{
			switch(error.code){
				case 202: 
					alert('用户名已被占用')
					break;
				default: 
					alert(error)
					break;
			}
		}
		signUp(email, username, password, success, error)
	}

	signIn(e){
		e.preventDefault()
		let {username, password} = this.state.formData
		console.log('1')
		
		let success = (user)=>{
			this.props.onSignIn.call(null, user)
			console.log('success')
		}
		let error = (error)=>{
			switch(error.code){
				case 210: 
					alert('用户名与密码不匹配')
					break;
				default: 
					alert(error)
					break;
			}
		}
		console.log('2')
		signIn2(username, password, success, error) 
		console.log('3')
		// 1 2 3 signIn2 success 
		//signIn2必须放最后
	}
	showSignInOrUp(e){
		// document.getElementById("signIn").classList.remove("hidden")
		// document.getElementById("signUp").classList.add("hidden")
		this.setState({
			selectedTab: e.target.value
		})
	}
	hidePane(){
		this.setState({
			selectedTab: ''
		})		
	}

	render() {
		// let SignUpForm = ()
		// let SignInForm = ()
		// let signInOrSignUp = ()
		// let forgotPassword = ()
		return(
				<div className="UserDialog-Wrapper">								
					    {/*<div id="signUp" className="UserDialog hidden">
						  	{this.state.selectedTab === 'signInOrSignUp'
							 ? <SignInOrSignUp
				                formData={this.state.formData}
				                onSignIn={this.signIn.bind(this)}
				                onSignUp={this.signUp.bind(this)}
				                onChange={this.changeFormData.bind(this)}
				                onForgotPassword={this.showForgotPassword.bind(this)}
						        />
							 : <ForgotPasswordForm
								    formData={this.state.formData}
								    onSubmit={this.resetPassword.bind(this)}
								    onChange={this.changeFormData.bind(this)}
								    onSignIn={this.returnToSignIn.bind(this)} 
							   />
							}
						</div>*/}
						<div className="letter-wrapper ">
							<div id="T" className="letter  TandD ">T</div>
							<div id="signUp" className="letter">
								{this.state.selectedTab === 'SignUp'
									?<SignUpForm
										formData={this.state.formData}
										onSubmit={this.signUp.bind(this)}
										onChange={this.changeFormData.bind(this)}
										onClick={this.hidePane.bind(this)}
									/>
									:<div className="btn-wrapper letter">
										<button type="button" className=" btn cover-btn" value="SignUp" onClick={this.showSignInOrUp.bind(this)}>
											注&nbsp;册 
										</button>
									 </div> 
								}						
							</div>
							<div id="D" className="letter  TandD">D</div>
							<div id="signIn" className="letter">
							  {this.state.selectedTab === 'SignIn'
									? <SignInForm
										  formData={this.state.formData}
										  onSubmit={this.signIn.bind(this)}
										  onChange={this.changeFormData.bind(this)}
										  onForgotPassword={this.showForgotPassword.bind(this)}
										  onClick={this.hidePane.bind(this)}
									  />
									:<div>
										{this.state.selectedTab === 'forgotPassword'
											?<ForgotPasswordForm
											    formData={this.state.formData}
											    onSubmit={this.resetPassword.bind(this)}
											    onChange={this.changeFormData.bind(this)}
											    onSignIn={this.returnToSignIn.bind(this)} 
										   />
											:<div className="btn-wrapper letter">
											 	<button type="button" className=" btn cover-btn" value="SignIn" onClick={this.showSignInOrUp.bind(this)}>
											 		登&nbsp;录
											 	</button>
											 </div>
										}								
									 </div>
							  }

							</div>
						</div>					
				</div>
			)		

	}
	changeFormData(key, e){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
		stateCopy.formData[key] = e.target.value  //.key不行
		this.setState(stateCopy)
	}
	showForgotPassword(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
		stateCopy.selectedTab = 'forgotPassword'
		this.setState(stateCopy)
	}
	resetPassword(e){
		e.preventDefault()
		sendPasswordResetEmail(this.state.formData.email)
	}
	returnToSignIn(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
		stateCopy.selectedTab = 'SignIn'
		this.setState(stateCopy)
	}

}