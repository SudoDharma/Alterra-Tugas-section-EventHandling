import { Component } from "react"

import styles from "./style.module.css"

class ListTodos extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div>
                    <input type="checkbox" name="check" 
                    onChange={() => {this.props.checkTodo(this.props.todo.id)}} 
                    checked={this.props.todo.completed}/>

                    <p style={
                        {textDecoration : this.props.todo.completed ? "line-through" : "none",
                        fontStyle: this.props.todo.completed ? "italic" : "normal",
                        color: this.props.todo.completed ? "gray" : "black"}
                        }
                        >{this.props.todo.title}</p>
                </div>
                <button onClick={() => this.props.hapusTodo(this.props.todo.id)}>Delete</button>
            </div>
        )
    }
}

export default ListTodos