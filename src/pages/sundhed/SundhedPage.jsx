import Hero from "../../components/hero/Hero";
import Accordion from "../../components/accordion/Accordion";
import BecomeMember from "../../components/becomeMember/BecomeMember";
import Transition from "../animatedPage/transition";

const SundhedPage = () => {
  
 return (
        <Transition>
            <div className={"center-page"}>
                <Hero type={"sundhed"}></Hero>
                <Accordion></Accordion>
                <BecomeMember></BecomeMember>
            </div>
        </Transition>
    );
};

export default SundhedPage;
