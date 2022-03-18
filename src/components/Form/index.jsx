import styles from "./style.module.css"

const Form = () =>{
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Add todo..." />
            <button>Submit</button>
        </div>
    )
}

export default Form