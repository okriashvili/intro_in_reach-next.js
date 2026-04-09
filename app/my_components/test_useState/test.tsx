import {useState} from 'react';
import styles from "./test.module.scss"



// the code below, return the two radio buttos, and we can check only one at the same time, 
export default () => {

    // both value are stored in same data, 
    // and we can check only one at the same time, 
    // because they are in same data, if we check one, 
    // the other will be unchecked, and if we check the other one, 
    // the first one will be unchecked.
    const [wveni, setWveni] = useState("");

    // below we are cathcing the value of the radio button, and storing it in the state,
    // so we can use it later, and also we can check which one is checked, 
    // by comparing the value of the radio button with the value stored in the state, 
    const changeWveni = (e : any) => {
        setWveni(e.target.value);
    }
    // also, we are using the same function for both radio buttons, 
    // because they are in the same data, and we can check only one at the same time,

    return (
        <div className={styles.container}> choose your wveni: <br />
            yupi <input type="radio" 
            value="yupi" 
            // we are checking the value of the radio button here, is it equal to the value stored in the state,
            // after the click it will change the value of the state, and the other one will be unchecked, 
            // because it is not equal to the value stored in the state,
            checked = {wveni == "yupi"} 
            onChange={changeWveni} 
            className={styles.myinput}/>
            

            zuko <input type="radio" 
            value="zuko" 
            checked = {wveni == "zuko"} 
            onChange={changeWveni} 
            className={styles.myinput}/>
        </div>
    )
}