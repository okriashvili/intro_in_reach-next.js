// we created greet paragraph, where we display hello and user name, name changes according to the users
// we are retrieveing user infromation from the myInfo js
import { myInfo as user } from "@/app/header/myinfo";
// we can link our css by importing the css file
// unlike regular import, we don't use the from or function name here
// if we name our css file as name > .module.css, we can import it as styles, and use it as styles.className in {} like js object
import styles from "./header.module.css"
import Link from "next/link";

import "./header.css"
// syntax is easier: import + file address



function Greet(name : string) {
    return "Hello" + name;
}


// instead of using anchor tag, for links, react uses Link attribute 
// a tag refreshes the website, which is incorrect in react, cause as we know it is SPA, therefore to avoid such behaviour we use link  
// now we must rewrite our header, since we have route and different endpoint, lets link them 
export const header = () => {
    return (
        <header className="fp">

            <span className="p">
                {Greet(" customer")}
            </span>

            <Link href="/products/product_detail" className="header">product details</Link>

            <Link href="/products" className="header">products</Link>

            <Link href="/" className="header">Home</Link>            

        </header>
    );
}

// lets ractice creating our attribute in test.tsx