import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';
import UserDialog from './UserDialog';
import {getCurrentUser, signOut1, TodoModel} from './leanCloud'
 

export default class App extends Component {
  constructor(props){
    super(props)  
    this.state = {
      user: getCurrentUser || {},
      newTodo: '',
      todoList: [],
      // month: month,
      // day: day
    }
    // let user = getCurrentUser() 暴露隐私的罪魁祸首
    // if(user){
    //   TodoModel.getByUser(user, (todos)=>{
    //     let stateCopy = JSON.parse(JSON.stringify(this.state))
    //     stateCopy.todoList = todos
    //     this.setState(stateCopy)
    //   })
    // }
  }

  render() {
    let todos = this.state.todoList
                .filter((item)=> !item.deleted) //只展示没有被删除的todo
                .map((item,index)=>{              
                  return (
                    <li key={index}>
                      <TodoItem 
                      todo={item} 
                      onToggle={this.toggle.bind(this)}
                      onDelete={this.delete.bind(this)}/>
                    </li>
                  )
                })
        
    return (
      <div className="App">
        <h1>{this.state.user.username||'我'}的待办       
        {this.state.user.id?
          <button className="btn btn-default pull-right out"onClick={this.signOut.bind(this)}>
           <i className="iconfont">&#xe610;</i>
          </button>:null}           
        </h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} 
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol className='todoList'>
          {todos}
        </ol>
        {this.state.user.id
          ?null
          :<UserDialog 
            onSignUp={this.onSignUpOrSignIn.bind(this)}
            onSignIn={this.onSignUpOrSignIn.bind(this)}
           /> 
        }
      </div>
    )
  }

  toggle(e, todo){
    let oldStatus = todo.status
    todo.status = todo.status ==='completed' ?'' :'completed'

    TodoModel.update(todo, ()=>{
      this.setState(this.state)
    }, (error)=>{
      todo.status = oldStatus
      this.setState(this.state)
    })
    
  }
  delete(e, todo){
    TodoModel.destroy(todo.id, ()=>{
      todo.deleted = true
      this.setState(this.state)
    })   
  }
  addTodo(event){     //onKeyPress->onSubmit->addTodo()  
    let date = new Date()
    let month = date.getMonth()+1
    let day = date.getDate()  
    // this.state={
    //   month: month,
    //   day: day      
    // }
    // this.setState({
    //   month: month,
    //   day: day       
    // })
    let newTodo = {
      title: event.target.value,
      status: '',
      deleted: false,
      // month: this.state.month,
      // day: this.state.day
      month: month,
      day: day
    }
    TodoModel.create(newTodo, (id)=>{ //?
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error)=>{
      alert(error)
    })
    
  }
  changeTitle(event){   //onChange->changeTitle()  对于TodoInput
    this.setState({
      newTodo: event.target.value
      // todoList: this.state.todoList //?删掉没影响
    })
    
  }  
  signOut(){
    signOut1()  
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
    // this.state.user={}  可以
    // this.setState(this.state)
  }
  onSignUpOrSignIn(user){
    let stateCopy= JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
    let users = getCurrentUser()
    if (users) {
      TodoModel.getByUser(users, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }


}


