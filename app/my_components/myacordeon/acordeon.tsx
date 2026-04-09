import {useState} from "react";

import styles from "./acordeon.module.scss";




export default function MyAcordeon(e : any) {

    const [isCkecked, setIsChecked] = useState(false);

    const display = (e : any) => {
        setIsChecked(e.target.checked);
    }


    return (
        <>
            <h3 className={styles.display}>click to display list</h3>
            <input type="checkbox"
            className={styles.myCheckbox}
                checked={isCkecked}
                onChange={display}
            />
            {
                isCkecked && 
                <ul className={styles.myUl}>
                    <li className={styles.myList}>test acordeon</li>
                    <li className={styles.myList}>success acordeon</li>
                    <li className={styles.myList}>end of test</li>
                </ul>

            }



        </>


    )
}
