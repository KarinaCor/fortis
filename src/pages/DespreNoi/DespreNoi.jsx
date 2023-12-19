import { Introducing } from "./components/AboutUs/AboutUs";
import { DespreHero } from "./components/DespreHero/DespreHero";
import { DespreIntroducing } from "./components/DespreIntroducing/DespreIntroducing";
import { DespreOffers } from "./components/DespreOffers/DespreOffers";
import { NewHorizonts } from "./components/NewHorizonts/NewHorizonts";
import { OurValues } from "./components/OurValues/OurValues";
import { Reviews } from "./components/Reviews/Reviews";


 const DespreNoi = () => {
    return (
        <>
        <DespreHero/>
      <DespreIntroducing />
      <Introducing/>
      <OurValues/>
      <NewHorizonts/>
      <DespreOffers/>
      <Reviews/>
      
        </>

    )
}

export default DespreNoi;