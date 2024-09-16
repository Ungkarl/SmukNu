import Hero from "../../components/hero/Hero";
import MemberForm from "../../components/memberForm/memberForm";
import AnimatedPage from "../animatedPage/AnimatedPage";
import Transition from "../animatedPage/transition";

const BlivMedlemPage = () => {
  return (
    <Transition>
      <div className={"center-page"}>
        <Hero type={"bliv-medlem"}></Hero>
        <MemberForm></MemberForm>
      </div>
    </Transition>
  );
};

export default BlivMedlemPage;
