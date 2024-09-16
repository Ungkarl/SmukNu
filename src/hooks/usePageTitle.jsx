import { useEffect, useState } from "react";

const usePageTitle = (pathname) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        switch (pathname) {
            case "/":
                setTitle("Forside");
                break;
            case "/spoerg-om-sundhed":
                setTitle("Spørg om sundhed");
                break;
            case "/bliv-medlem":
                setTitle("Bliv medlem");
                break;
            case "/produkter":
                setTitle("Vores produkter");
                break;
            default:
                setTitle("");
                break;
        }
    }, [pathname]);

    return title;
};

export default usePageTitle;
