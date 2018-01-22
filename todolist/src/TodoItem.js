import React, { Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component{
	constructor(props){
		super(props)
		// let date = new Date()
		// let month = date.getMonth()+1
		// let day = date.getDate()
		// this.state={
		// 	month: month,
		// 	day: day			
		// }
	}
	render(){
		return (
			<div className='TodoItem'>
			    <div className={this.props.todo.status}>
			      <i  className="iconfont">&#xe608;</i> 	
			    </div>			                                              {/*cool*/}
				<input type="checkbox" className={this.props.todo.status} 
					checked={this.props.todo.status === 'completed'}
					onChange={this.toggle.bind(this)} 
				/>
				<span className='title '>
					{this.props.todo.title}
				</span>
				<span className="date">{this.props.todo.month+'/'+this.props.todo.day}</span>
				<button className="btn btn-default"onClick={this.delete.bind(this)}>
					<i className="iconfont delete">&#xe677;</i>
				</button>
			</div>
		)
	}
	toggle(e){
		this.props.onToggle(e, this.props.todo)
		// e.target.classList.toggle("delete-style")
		// console.log(e.target.checked)
	    if(e.target.checked){  //e.target.checked="true"不可以？
	      e.target.classList.add("completed")
	  	  e.target.previousSibling.previousSibling.classList.add("completed")
	    }else{
	      e.target.classList.remove("completed")
	      e.target.previousSibling.previousSibling.classList.remove("completed")
	    }		
	}
	delete(e){
		this.props.onDelete(e, this.props.todo)
	}

}