import React from 'react';
import { useBasket } from '../../hooks/useBasketHook';
import styles from './basketList.module.css';

const BasketList = () => {
    const { basket, deleteItem } = useBasket();

    return (
        <div className={styles.basketList}>
            {basket.length > 0 ? (
                basket.map(item => (
                    <div key={item._id} className={styles.basketItem}>
                        <span>{item.title}</span>
                        <span>{item.quantity}</span>
                        <button onClick={() => deleteItem(item._id)}>Fjern</button>
                    </div>
                ))
            ) : (
                <div>Din kurv er tom...</div>
            )}
        </div>
    );
};

export default BasketList;
