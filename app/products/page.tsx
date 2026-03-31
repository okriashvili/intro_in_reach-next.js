"use client";

// created new endpoint, new route: here we have displayed the products, and we have nested the product_detail endpoint
// we can access product_detail endpoint through the products endpoint

import styles from "./page.module.css"


export default function products() {

    return (
        <div className={styles.container}>
            <h2>our product</h2>
            <p>product description</p>
            <p>price</p>

        </div>
    )

}