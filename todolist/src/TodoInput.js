import React from 'react';

export default function (props) {
	return <input type="text" value={props.content}
			className="TodoInput"
			onChange={changeTitle.bind(null, props)}  //bind?
			onKeyPress={submit.bind(null, props)} />
}

function submit(props, e){
	if(e.key === 'Enter') {
		if(e.target.value.trim()!==''){
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
