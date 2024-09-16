import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import { useEffect, useState } from "react";

const Transition = ({ children }) => {
    const location = useLocation();
    const title = usePageTitle(location.pathname);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            // Update viewport height when window is resized
            setViewportHeight(window.visualViewport ? window.visualViewport.height : window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const translateYValue = -viewportHeight; // Move the element 100% up

    return (
        <>
            {children}
            <motion.div
                className="slide-in"
                initial={{ translateY: 0 }}
                animate={{ translateY: translateYValue }}
                exit={{ translateY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1>{title}</h1>
            </motion.div>
        </>
    );
};

export default Transition;
