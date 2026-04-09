



export default function rgbColor() {

    let col1 = Math.round(Math.random() * 256); 
    let col2 = Math.round(Math.random() * 256); 
    let col3 = Math.round(Math.random() * 256); 



    return `rgb(${col1}, ${col2} ,${col3})`;

}

let randomColor = rgbColor()
console.log(randomColor);


