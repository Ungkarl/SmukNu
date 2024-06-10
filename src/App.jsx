import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GlobalNavigation from "./components/navigation/GlobalNavigation";
import GlobalFooter from "./components/footer/GlobalFooter";



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
      element : <div>Spørg om sundhed</div>
    },
    {
      path: "/bliv-medlem",
      element : <div>Bliv medlem</div>
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
