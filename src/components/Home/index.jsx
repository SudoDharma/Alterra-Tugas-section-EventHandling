import { Component } from "react";

import styles from "./style.module.css"

import Form from "../Form";
import List from "../List";

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            data : [
                {
                  id: 1,
                  title: "Mengerjakan exercise",
                  completed: true
                },
                {
                  id: 2,
                  title: "Mengerjakan assignment",
                  completed: false
                },
              ]
        }
    }

    tambahTodo = (newData) => {
        const newTodo = {id: this.state.data.length + 1, ...newData}

        this.setState({data: [...this.state.data, newTodo]})
    }

    hapusTodo = (id) => {
        const newListTodos = this.state.data.filter((item) => item.id !== id)
        this.setState({data: newListTodos})
    }

    checkTodo = (id) => {
        const newStatus = this.state.data.map((data) => {
            if(data.id === id){
                return {...data, completed: !data.completed}
            }
            else{
                return data
            }
        })
        this.setState({data: newStatus})
    }

    render(){
        return (
            <div className={styles.container}>
              <h1>todos</h1>
              <Form tambahTodo={this.tambahTodo}/>
              <List todos={this.state.data} hapusTodo={this.hapusTodo} checkTodo={this.checkTodo}/>
            </div>
        );
    }
}

export default Home