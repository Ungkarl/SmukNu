import { useState } from "react"
import styles from "./productCard.module.css"
const ProductCard = ({ product, index }) => {


    return (
        <div key={index} className={styles["product-card"]}>
            <div className={styles["card-top"]}>
            <img src={product.image}></img>
            </div>
            
            <div className={styles["card-bottom"]}>
            <h2>{product.title}</h2>
            <div>
            <p>{product.price} kr.</p>
            <button>KØB</button>
            </div>
            
            </div>
            
        </div>
    );
    

}

export default ProductCard;