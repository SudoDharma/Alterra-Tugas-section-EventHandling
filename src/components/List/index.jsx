import styles from "./style.module.css"

import ListTodos from "../ListTodos"

const List = ({todos}) => {
    return(
        <div className={styles.container}>
            {todos.map((todo) => <ListTodos todo={todo} /> )}
        </div>
    )
}

export default List