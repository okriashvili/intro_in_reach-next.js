import { title } from "process";
// import stili from "./components.css"
import "./components.css"


// when we are creating variable  we must use let/var/const keywords
const courses = ["React", "UI/UX", "Django"];



export const TestFunc = () => {

    return (
        <h3 className="container">
            {/* {} all JS code are written inside this curly braces in JSX, */}
            {courses.map(x => <p key={x}> {x} </p>)}
            {/* {courses.map(x => <p> {x} </p>)} */}
        </h3>

    ) 
}

// styling in JSX is different, we use className instead of class, 
// we can import css file and link it to our component, t
// hen we can use the class names in our JSX code or if we want to use inline style, it has different syntax


export function TestInineStyle() {
    return ( 
        <>
        {/* inline style syntax in JSX is different, we use nested {{}} curly brace, and write our style statement inside nested curly brace */}
            <span style={{color : "green", }}>testing inline style</span>
        </>
    )
}

