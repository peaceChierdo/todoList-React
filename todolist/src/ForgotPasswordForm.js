import React, { Component } from 'react';

export default class ForgotPasswordForm extends Component {
	render(){
		return(			
				<form className="forgotPassword" onSubmit={this.props.onSubmit}>				
					<h3>重置密码</h3>
					<div className="row">
						<input type="text"  placeholder="请输入邮箱"
						 value={this.props.formData.email}
						 onChange={this.props.onChange.bind(null, 'email')} />
					</div>
					<div className="row actions">
						<button type="submit" className="btn btn-default">发送重置邮件</ button>
						<button type="button" className="btn btn-link" onClick={this.props.onSignIn}>返回登录</button>
					</div>
				</form>
		)
	}
}