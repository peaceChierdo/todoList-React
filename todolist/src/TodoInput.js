import React from 'react';
// import './TodoInput.css';

export default function (props) {
	return (
		<div>
		   <input type="text" value={props.content}
			className="TodoInput"
			placeholder="要做什么？"
			onChange={changeTitle.bind(null, props)}  //bind()
			onKeyPress={submit.bind(null, props)} 
		   />
		   <i className="iconfont front-sticker">&#xe604;</i>
		   <i className="iconfont enter-tip" onClick={submit.bind(null, props)} title="点击添加待办（或回车）">&#xe6e3;</i>
		</div>
		)

}

function submit(props, e){
	// if(e.key === 'Enter') {
	// 	if(e.target.value.trim()!==''){//trim()
	// 		props.onSubmit(e)
	// 	}
	// }
	if(e.key === 'Enter') {
		if(e.target.value.trim()!==''){//trim()
			props.onSubmit(e)
		}
	}else if(!e.key){
		if(e.target.parentNode.children[0].value.trim()!==''){
			props.onSubmit(e)		
		}		
	}
}

function changeTitle(props, e){
	props.onChange(e)
}
