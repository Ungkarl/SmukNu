import { useState, useEffect } from "react";


export const useQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const response = await fetch("https://smuknu.webmcdm.dk/questions")
            const data = await response.json();
            setQuestions(data);
        };

        getQuestions();

   }, []);

    return questions;
};