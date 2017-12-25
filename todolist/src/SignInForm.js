import React from 'react';

export default function (props){
	return (
		<form className="signInForm " onSubmit={props.onSubmit}>
			<button type="button" className="close" onClick={props.onClick}>
			    &times;
		    </button>		
		    <h3>登录</h3>
			<div className="row ">
				{/*<label className="">用户名</label>*/}
				<input type="text" className=""  placeholder="用户名"
				   value={props.formData.username}
				   onChange={props.onChange.bind(null, 'username')} />
				<i className="iconfont user">&#xe601;</i>
			</div>
			<div className="row ">
				{/*<label className="">密码</label>*/}
				<input type="password" className=""  placeholder="密码"
				   value={props.formData.password} 
				   onChange={props.onChange.bind(null, 'password')}/>
				<i className="iconfont unlock">&#xe97b;</i>
			</div>		
			<div className="row actions ">
				<button type="submit" className="btn btn-default" >登录</button>
				<button type="button" className="btn  btn-link" onClick={props.onForgotPassword}>忘记密码了？</button>
			</div>					
		</form>			
	)
}
