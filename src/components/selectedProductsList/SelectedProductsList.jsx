import { useState, useEffect } from 'react';
import { useSelectedProducts } from "../../hooks/useProducts";
import styles from "./selectedProductsList.module.css";
import ProductCard from '../productCard/ProductCard';
const SelectedProductsList = () => {
    const [products, setProducts] = useState([]);
    const selectedProducts = useSelectedProducts();

    useEffect(() => {
        setProducts(selectedProducts);
      
    }, [selectedProducts]);

   

    return (
        <div className={styles.selectedProductsList}>
            <h1>UDVALGT<br></br> <span>SKØNHED</span></h1>
            {products.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    );
};

export default SelectedProductsList;