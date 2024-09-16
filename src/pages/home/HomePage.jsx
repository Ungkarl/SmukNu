import React from "react";
import Hero from "../../components/hero/Hero";
import SelectedProductsList from "../../components/selectedProductsList/SelectedProductsList";
import Reviews from "../../components/reviews/Reviews";
import BecomeMember from "../../components/becomeMember/BecomeMember";
import Transition from "../animatedPage/transition";

const HomePage = () => {
  const HeroType = "forside";
  return (
    <Transition>
      <div className="center-page">
        <Hero type={HeroType} />
        <SelectedProductsList />
        <Reviews />
        <BecomeMember />
      </div>
    </Transition>
  );
};

export default HomePage;
