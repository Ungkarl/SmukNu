import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GlobalNavigation from "./components/navigation/GlobalNavigation";
import GlobalFooter from "./components/footer/GlobalFooter";
import SundhedPage from "./pages/sundhed/SundhedPage";
import BlivMedlemPage from "./pages/blivMedlem/blivMedlemPage";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/produkter",
      element : <div>Produkter</div>
    },
    {
      path: "/spørg-om-sundhed",
      element : <SundhedPage></SundhedPage>
    },
    {
      path: "/bliv-medlem",
      element : <BlivMedlemPage></BlivMedlemPage>
    }
  ]);


  return <>
    
    <div>
        <GlobalNavigation></GlobalNavigation>
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       <GlobalFooter></GlobalFooter>
    </div>
  </>;

}

export default App;
