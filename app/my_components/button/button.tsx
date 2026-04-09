// import { createExhaustiveURLSearchParamsProxy } from "next/dist/server/app-render/instant-validation/instant-samples";
import styles from "./Button.module.scss"

type myProps = {
    disabled?: boolean;
    title: string; 
    className?: string;
    // straight line is same as or operator IN js, it means that the mode can be either filled or outlined
    mode?: "fill" | "outline";


}


export default (props : myProps) => {

    const classes = [styles.container, styles.div];
    // let mtinfo = [styles.container, styles.div];


    // if block allows us to controll the button styles according to its mode, classes, props.
    // we created one button which changes its styles according to the mode we'll assign when using it  
// if(props.disabled == true) classes.push(styles.disabled) 
    // since we rewrite the code and using the pseudo classes, we don't need to check if the button is disabled or not
    // css pseudo classes are doing them itself
    
    
    // bu we are using the mode, so we need to build logic for that
    if (props.mode == "outline") classes.push(styles.outline);
    else classes.push(styles.fill);



    return (
        // we can give two or more class to element by next syntax
        // <div className={`${styles.container} ${styles.div}`}
        // but we can also arrange all classes into aray, and assing joined aray f.e
        // we created the aray where we arranged the classes styles, next we using that aray to give our button styles
        // we use join to turn them into string, cause className won't take aray as argument, 
        // joining by space, as two or more classes are seperated by space, not coma but space" " 
        
        <button disabled={props.disabled} className={classes.join(" ").trim()}>
            {props.title}

        </button>

    )
}