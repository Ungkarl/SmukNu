import { useReviews } from '../../hooks/useReviews';
import styles from './reviews.module.css';
import { useState, useEffect } from 'react';

const Reviews = () => {
    const [review, setReview] = useState(null);
    const reviews = useReviews();

    useEffect(() => {
        if (reviews.length > 0) {
            const randomIndex = Math.floor(Math.random() * reviews.length);
            setReview(reviews[randomIndex]);
        }
    }, [reviews]);

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles["review-title"]}><span>SKØNHEDER</span><br></br>UDTALER</h2>
        <div className={styles.review}>
            <div className={styles["profile-image"]}>
                <img src={review.image} alt={review.name} />
            </div>
            <div className={styles["review-content"]}>
            <p>{review.description}</p>
                <h2>{review.name}<br></br><span>{review.byline}</span></h2>
               
            </div>
        </div>
        </div>
    );
};

export default Reviews;