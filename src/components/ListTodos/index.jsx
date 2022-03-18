import styles from "./style.module.css"

const ListTodos = ({todo}) => {

    return(
        <div className={styles.container}>
            <div>
                <input type="checkbox"/>
                <p>{todo.title}</p>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default ListTodos