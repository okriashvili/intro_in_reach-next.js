// we created greet paragraph, where we display hello and user name, name changes according to the users
// we are retrieveing user infromation from the myInfo js
import { myInfo as user } from "@/my_components/myinfo"
// we can link our css by importing the css file
// unlike regular import, we don't use the from or function name here
import "@/css/style.css"
// syntax is easier: import + file address

function Greet(name : string) {
    return "Hello" + name;
}


export const GreetButton = () => {
    return (
        <div className="fp">

            <span className="p">
                {Greet(" customer")}
            </span>

            <span className="header"> 
                contact
            </span>
            <span className="header">
                about us
            </span>
        </div>
    );
}

// lets ractice creating our attribute in test.tsx