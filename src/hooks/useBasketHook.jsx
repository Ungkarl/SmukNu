import { useContext } from "react";
import { BasketContext } from "../context/BasketContextProvider";

export const useBasket = () => useContext(BasketContext);