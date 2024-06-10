import McInfoCard from "../../components/mc/McInfoCard/McInfoCard";
import Hero from "../../components/hero/Hero";
import SelectedProductsList from "../../components/selectedProductsList/SelectedProductsList";
import Reviews from "../../components/reviews/Reviews";
const HomePage = () => {
    const HeroType = 'forside'
    return (
        <div className={"center-page"}>
         <Hero type={HeroType}></Hero>
         <SelectedProductsList></SelectedProductsList>
         <Reviews></Reviews>
        </div>
    );
};
export default HomePage;