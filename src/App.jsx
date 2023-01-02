import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import List from './components/List'
import './App.css';

export default class App extends Component {

  state = {todos: [
      { id: '001', name: 'Eating', done: true },
      { id: '002', name:'Sleeping', done:true},
      { id: '003', name:'Coding', done:false},
  ]
  }
  
  // addTodo用于添加一个todo，接受的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className = "todo-container">
          <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
            <List todos={todos}/>
            <Footer/>
          </div>
      </div>
    )
  }
}
