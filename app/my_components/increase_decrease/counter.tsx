import styles from "./counter.module.scss"


// variables ad states in react 
// in react, if we want to change the value of a variable dynamically, we need to use state.
// state is a special type of variable that allows us to store and manage data in our components.
// first we need to import useState from react, its a built in function which allows to change the value of a variable dynamically, 
// and also it allows us to re-render our component when the value of the variable changes.


import { useState } from "react";

export default function Counter() {
  
    // let count = 0; 
    // let increaseCount = () => {
    //     count = count + 1;
    //     console.log(count)
    // } the function will work but not in JSX, cause it won't re-render the component when the value of count changes, 
    // so we need to use state to achieve that. so to fix that issue we use the states


    const [count, setCount] = useState(0); // useState name remain, cause its builtin function
    // second argument in list is always the function, we can name whatever we want, but its better to name set+Variable name

    // count - is our create variable
    // setCount - is a function, in which we will pass the new value of count, 
    // and it will update the value of count and re-render the component 
    // useState - is a built in function, and in which we assign the value inside the braces
    // the count variable will take that value

    const increaseCount = () => {
        // count = count + 1; // even we are using the states, that approach is also incorrect, 
                              // cause if we want to change the value, we must assign it to setCount func
        setCount(count + 1);
        // setCount takes new value, and it changes the count variables value with new ones automatically
    }
    
    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={increaseCount} className={styles.mybutton}>plus</button>
            
            <p className={styles.number}>{count}</p>

            <button onClick={decreaseCount} className={styles.mybutton}>minus</button>
        </>
      
    )





  
    // const [count, setCount] = useState(0);


}