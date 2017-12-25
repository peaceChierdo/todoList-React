import React, { Component } from 'react'

//---------FOR SignInOrSignUp------------

// export default function (props) {
// 	return (
// 		<form className="signUp" onSubmit={props.onSubmit.bind(this)}>
// 			<div className="row">
// 				<label>邮箱</label>
// 				<input type="text" value={props.formData.email}
// 				   onChange={props.onChange.bind(null, 'email')} />
// 			</div>
// 			<div className="row">
// 				<label>用户名</label>
// 				<input type="text" value={props.formData.username}
// 				  onChange={props.onChange.bind(null, 'username')}/>
// 			</div>
// 			<div className="row">
// 				<label>密码</label>
// 				<input type="password" value={props.formData.password} 
// 				   onChange={props.onChange.bind(null, 'password')}/>
// 			</div>		
// 			<div className="row actions">
// 				<button type="submit" className="btn btn-success">注册</button>
// 			</div>					
// 		</form>			
// 	)
// }

//---------- can also do -------------
export default class SignUpForm extends Component {
	render(){
		return (
			<form className="signUpForm "  onSubmit={this.props.onSubmit}>
			    <button type="button" className="close" onClick={this.props.onClick}>
			      &times;
		      </button>
			    <h3>注册</h3>			    
				<div className="row ">
					{/*<label className="">邮箱</label>*/}
					<input type="text" className="" placeholder="邮箱"
					   value={this.props.formData.email}
					   onChange={this.props.onChange.bind(null, 'email')} />
					<i className="iconfont email">&#xe603;</i>
				</div>
				<div className="row ">
					{/*<label className="">用户名</label>*/}
					<input type="text" className="" placeholder="用户名"
					  value={this.props.formData.username}
					  onChange={this.props.onChange.bind(null, 'username')}/>
					<i className="iconfont user">&#xe601;</i>
				</div>
				<div className="row">
					{/*<label className="">密码</label>*/}
					<input type="password" className="" placeholder="密码"
					   value={this.props.formData.password} 
					   onChange={this.props.onChange.bind(null, 'password')}/>
					<i className="iconfont lock">&#xe74d;</i>
				</div>		
				<div className="row actions ">
					<button type="submit" className="btn btn-block">注册</button>
				</div>					
			</form>			
		)
	}

}