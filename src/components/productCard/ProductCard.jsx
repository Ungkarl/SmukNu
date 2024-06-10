import { useBasket } from "../../hooks/useBasketHook"; 
import styles from "./productCard.module.css";

const ProductCard = ({ product, index }) => {
    const { addItem } = useBasket();  

    const handleAddToBasket = () => {
        let ordre = {
            _id: product._id,
            quantity: 1
        };
        addItem(ordre);
    };

    return (
        <div key={index} className={styles["product-card"]}>
            <div className={styles["card-top"]}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles["card-bottom"]}>
                <h2>{product.title}</h2>
                <div>
                    <p>{product.price} kr.</p>
                    <button onClick={handleAddToBasket}>KØB</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
