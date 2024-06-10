import { useState, useEffect } from "react";


export const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const response = await fetch("https://smuknu.webmcdm.dk/reviews")
            const data = await response.json();
            setReviews(data);
        };

        getReviews();

   }, []);
return reviews;

};