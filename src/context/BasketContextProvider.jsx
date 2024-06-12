import {createContext} from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getSingleProduct } from "../hooks/useProducts";

export const BasketContextProvider = ({ children }) => {

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const savedBasket = localStorage.getItem("basket");
        if (savedBasket) {
            setBasket(JSON.parse(savedBasket));
        }
    }, []);

    const addItem = async (item) => {
        let newBasket = [...basket];
        let foundItem = newBasket.find((i) => i._id === item._id);
    
        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            let product = await getSingleProduct(item._id);
            product.quantity = 1;
            newBasket.push(product);
        }
    
        localStorage.setItem("basket", JSON.stringify(newBasket));
        setBasket(newBasket);
    };
    
    const deleteItem = (id) => {
        const newBasket = basket.filter((item) => item._id !== id);
        localStorage.setItem("basket", JSON.stringify(newBasket));
        setBasket(newBasket);
    };
       

    const emptyBasket = () => {
        setBasket([]);
        localStorage.removeItem("basket");
    }

  
    let exportValues = { 
        basket,
        addItem,
        emptyBasket,
        deleteItem
    };

    // Selve provideren som vi skal huske at wrappe omkring vores App i main.jsx
    return (
        <BasketContext.Provider value={exportValues}>
            {children}
        </BasketContext.Provider>
    );
};

export const BasketContext = createContext();