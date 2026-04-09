import styles from "./input.module.scss"
import {useState} from "react" 


export default function Input() {

    const [text, setText] = useState()


    // as we know we can manipulate the input values, and text written inside of it, 
    // we can catch the input value by targer and value, as we learn it in DOM
    const changeText = (e : any) => {
        setText(e.target.value)

    }


    return (
        // if we have a text inside the input, we can't change it, we can't type new text or remove it
        // for such case we use the states
        <>
            {text && <p className={`${styles.myinput} ${styles.myp}`}>hello {text} </p>}

            <input type="text" onChange={changeText} value={text} className={styles.myinput}/> 
        </>


    )

}