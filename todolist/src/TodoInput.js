import React from 'react';
// import './TodoInput.css';

export default function (props) {
	return (
		<div>
		   <input type="text" value={props.content}
			className="TodoInput"
			placeholder="record your plans in here"
			onChange={changeTitle.bind(null, props)}  //bind?
			onKeyPress={submit.bind(null, props)} 
		   />
		   <i className="iconfont front-sticker">&#xe604;</i>
		</div>
		)

}

function submit(props, e){
	if(e.key === 'Enter') {
		if(e.target.value.trim()!==''){//?为什么要trim
			props.onSubmit(e)
		}
		else{
			alert('what do you want to do?')
		}
	}
}

function changeTitle(props, e){
	props.onChange(e)
}
