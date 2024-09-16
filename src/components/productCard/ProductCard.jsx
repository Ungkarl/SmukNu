import React, { useState } from 'react';
import { useBasket } from "../../hooks/useBasketHook";
import styles from "./productCard.module.css";

const ProductCard = ({ product, index }) => {
  const { addItem } = useBasket();
  const [expanded, setExpanded] = useState(false);

  const handleAddToBasket = () => {
    let ordre = {
      _id: product._id,
      quantity: 1,
    };
    addItem(ordre);
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength);
    } else {
      return title;
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div key={index} className={styles["product-card"]}>
      <div className={styles["card-top"]}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles["card-bottom"]}>
        <h2 onClick={toggleExpanded}>
          {product ? (
            <>
              {expanded ? product.title : truncateTitle(product.title, 20)}
              {product.title.length > 20 && (
                <span className={styles["expand-button"]}>
                  {expanded ? '  Mindre' : '...'}
                </span>
              )}
            </>
          ) : (
            "Fejl ved afhentning af data"
          )}
        </h2>
        <div>
          <p>{product.price} kr.</p>
          <button onClick={handleAddToBasket}>KØB</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
