import styles from './memberForm.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const MemberForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false); // State to keep track of form submission
    const [submitData, setSubmitData] = useState({}); // State to keep track of form data [name, email, message]
    
    const onSubmit = (data) => {
        setSubmitData(data);
        setIsSubmitted(true);
    };

    const closeMessage = () => {
        setIsSubmitted(false);
    };

    return (
        <>
            {isSubmitted ? (
                <div className={styles["success-message"]}>
                    <div className={styles["close-message"]} onClick={closeMessage}>
                    <MdClose />
                    </div>
                    <h2>TAK!</h2>
                    <p className={styles["success-name"]}>{submitData.name}</p>
                    <p className={styles["success-text"]}>Vi er enormt glade for at få dig som medlem.</p>
                    <div className={styles["success-img"]}>
                        <img src="/products/product_1213213211.jpg"></img>
                    </div>
                    <p className={styles["success-text"]}>Kig i din inbox vi har sendt en lille velkomst gave.</p>
                    <button><Link to="/">Til Forsiden</Link></button>
                </div>
            ) : (
                <div className={styles["form-container"]}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Fulde navn</label>
                        <input type="text" id="name" {...register("name", { required: true })} />
                        {errors.name && <span>Dette felt er påkrævet</span>}

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span>Dette felt er påkrævet</span>}

                        <label htmlFor="message">Ris og/eller ros</label>
                        <textarea id="message" {...register("message", { required: false })} style={{ resize: "none" }} />

                        <button type="submit">Opret</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default MemberForm;