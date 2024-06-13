import { useState, useEffect } from "react";
import { FaBurger, FaBasketShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import BasketList from "../basket/BasketList";  // Update the import path
import styles from "./globalNavigation.module.css";
import { useBasket } from "../../hooks/useBasketHook";  // Update the import path

const GlobalNavigation = () => {
    const [mainNavigationOpen, setMainNavigationOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);
    const { basket } = useBasket();

    const openNavigationCls = mainNavigationOpen ? styles.open : "";
    const openBasketCls = basketOpen ? styles.open : "";

    const toggleNavigation = () => {
        if (!mainNavigationOpen && basketOpen) {
            setBasketOpen(false);
        }
        setMainNavigationOpen(!mainNavigationOpen);
    };

    const toggleBasket = () => {
        if (!basketOpen && mainNavigationOpen) {
            setMainNavigationOpen(false);
        }
        setBasketOpen(!basketOpen);
    };

    const checkIfClickedInside = (e) => {
        const navigation = document.querySelector(`.${styles.navigation}`);
        const basket = document.querySelector(`.${styles.basket}`);
        const basketList = document.querySelector(`.${styles.basketList}`);
        if (basketList) {
            basketList.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        if (navigation && navigation.contains(e.target)) {
            return;
        }
        if (basket && basket.contains(e.target)) {
            return;
        }
        if (basketList && basketList.contains(e.target)) {
            return;
        }
        setMainNavigationOpen(false);
        setBasketOpen(false);


    };


    useEffect(() => {
        document.addEventListener('click', checkIfClickedInside);
    
        return () => {
            document.removeEventListener('click', checkIfClickedInside);
        };
    }, []);

    return (
        <div className={styles.navigation}>
            <div className={styles.bar}>
                <div className={styles.logo}>
                    <Link to="/"><img src="/smuknu_logo.png" height="40px" alt="Smuknu logo"/></Link>
                </div>
                <div className={styles.actions}>
                    <div className={styles.basket} onClick={toggleBasket}>
                        <FaBasketShopping />
                        <span className={styles.quantity}>{basket.length}</span>
                    </div>
                    <div onClick={toggleNavigation} className={styles.burger}>
                        <FaBurger />
                    </div>
                </div>
            </div>
            <div className={`${styles.dropdown} ${styles.nav} ${openNavigationCls}`} onClick={() => setMainNavigationOpen(false)}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}> Forsiden</NavLink>
                <NavLink to="/produkter" className={({ isActive }) => isActive ? styles.active : ""}> Vores Produkter</NavLink>
                <NavLink to="/spørg-om-sundhed" className={({ isActive }) => isActive ? styles.active : ""}> Spørg om sundhed</NavLink>
                <NavLink to="/bliv-medlem" className={({ isActive }) => isActive ? styles.active : ""}> Bliv Medlem</NavLink>
            </div>
            <div className={`${styles.dropdown} ${styles.basket} ${openBasketCls}`}>
                <BasketList />
            </div>
        </div>
    );
};

export default GlobalNavigation;
