import {Spacing} from "@/app/_Components/Spacing";
import {LandingPage} from "@/app/_Components/Landing";
import {MainSection} from "@/app/_Components/MainSection";
import {OfferCardSection} from "@/app/_Components/OfferCardsSection";

export default function Home() {
  return (
      <main>
            <LandingPage/>
            <Spacing size={"5xl"}/>
            <MainSection/>
            <Spacing size={"5xl"}/>
            <OfferCardSection/>
      </main>
  );
}
