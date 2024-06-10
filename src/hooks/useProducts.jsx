import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://smuknu.webmcdm.dk/products");
            const data = await response.json();
            setProducts(data);
        };

        getProducts();
    }, []);

  

    return products;
};

export const useSelectedProducts = () => {
    const products = useProducts();
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const getSelectedProducts = () => {
            const recommendedProducts = products.filter(product => product.recommended);
            setSelectedProducts(recommendedProducts);
        };

        getSelectedProducts();
    }, [products]); 

    return selectedProducts;
};


export const getSingleProduct = async (id) => {
    try {

        const response = await fetch("https://smuknu.webmcdm.dk/products");
        const products = await response.json();
  

 
        const product = products.find(item => item._id === id);

        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }

        return product;
    } catch (error) {
        console.error("Error fetching single product:", error);
        throw error; 
    }
};

export default useProducts;