import { Component } from "react"
import styles from "./style.module.css"

class Form extends Component{
    state = {
        title: "",
        completed: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputNotEmpty = this.state.title

        if(inputNotEmpty){
            const newData = {
                title: this.state.title,
                completed: false
            }
            this.props.tambahTodo(newData);
            this.setState({
                title: "",
                completed: false
            })
        }
        else{
            alert("Inputan tidak boleh kosong");
        }
    }

    render(){
        return(
            <div className={styles.container}>
                <input type="text" placeholder="Add todo..." value={this.state.title} name="title" onChange={(e) => {this.onChange(e)}} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form