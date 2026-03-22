// import { log } from "console";
import "@/css/style.css"
// when we are creating variable  we must use let/var/const keywords
const courses = ["React", "UI/UX", "Django"];

export const TestFunc = () => {
    return (
        <div>
            {courses.map(x => <p className="block"> {x} </p>)}
        </div>
   
    ) 
}