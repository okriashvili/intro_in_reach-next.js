

// create my attribute
// attributes in jsx is called props, if we want to create our attribute, 
// we give a function parameter which we will use later as prop
// sice jsx uses typescript we need to set the type of our pop
type myProp = {
    // using ? mark to make prop optional
    title? : string;

}

// all our props must have the type of myProp, 
export function FooterAttribute(myProps : myProp) {

    return (
        <span>
            {myProps.title}
        </span>    

    )

}