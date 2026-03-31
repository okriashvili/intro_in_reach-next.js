"use client";

// routing in react (endpoint) are created inside the app folder, we create new folders, page.tsx file and create default function 
// whenever we need to change the route, it uses the folder name as endpoint and it returns default function in the page.tsx file,
// we can creata axilary file, but main file is page.tsx


// inside the layout.tsx html body, whenever the website endpoint changes, 
// the html and body remains same but only the childer elements changes.
// thats called spa - single page aplication

// here we created the contact us page,  

import styles from "./page.module.css"

export default function Contactus() {

    return (

        <h1 className={styles.container}>Contact Us</h1>

    )

}