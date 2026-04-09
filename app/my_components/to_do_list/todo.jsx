import { useState } from "react" 
import styles from "./todo.module.scss"

const rbgColor = () => {
    let col1 = Math.round(Math.random() * 256); 
    let col2 = Math.round(Math.random() * 256); 
    let col3 = Math.round(Math.random() * 256); 
    return `rgb(${col1}, ${col2} ,${col3})`;
}

export let randomColor = rbgColor()




export default () => {


 




    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([])

    const onChange = (e) => {
        setTask(e.target.value);

    }

    const addTasks = (e) => {
        setTasks([task, ...tasks]);
        setTask("");

    }

    // const onChanges


    return (
        <div className={styles.container}>
            <input type="text" 
            placeholder="add task" 
            value={task}
            onChange={onChange}
            className={styles.myInput}
            />


            <button onClick={addTasks} className={styles.mybutton}>+</button>
            <br />

            <ul className={styles.todo_ul}>
                {
                tasks.map(v => 
                    <li className={styles.mylist}>
                        {v}
                    </li> )
                }
            </ul>
        </div>


    )

}