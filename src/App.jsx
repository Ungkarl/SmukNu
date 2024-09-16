
import { useLocation, useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GlobalNavigation from "./components/navigation/GlobalNavigation";
import GlobalFooter from "./components/footer/GlobalFooter";
import SundhedPage from "./pages/sundhed/SundhedPage";
import BlivMedlemPage from "./pages/blivMedlem/blivMedlemPage";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    


    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage></HomePage>,
        },
        {
            path: "/produkter",
            element: <div>Produkter</div>,
        },
        {
            path: "/spoerg-om-sundhed",
            element: <SundhedPage></SundhedPage>,
        },
        {
            path: "/bliv-medlem",
            element: <BlivMedlemPage></BlivMedlemPage>,
        },
    ]);

    return (
        <>
            <div className="global-overflow-hidden">
                <GlobalNavigation></GlobalNavigation>
                <div className="globale-page-wrapper">
                    <AnimatePresence mode="wait">
                        <div key={location.pathname}>
                            {routes}
                        </div>
                    </AnimatePresence>
                </div>
                <GlobalFooter></GlobalFooter>
            </div>
        </>
    );
}

export default App;
