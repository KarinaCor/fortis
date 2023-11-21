import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../../pages/Acasa/components/Hero/Hero";
import { Introducing } from "../../../pages/Acasa/components/Introducing/Introducing";
import { Offers } from "../../../pages/Acasa/components/Offers/Offers";
import { ValueProposition } from "../../../pages/Acasa/components/ValueProposition/ValueProposition";
import { FindOutInformation } from "../FindOutInformation/FindOutInformation";
import { DespreHero } from "../../../pages/DespreNoi/components/DespreHero/DespreHero";

export const LayOut = () => {
  return (
    <>
      <Header />
      <Hero />
      <Introducing />
      <Offers />
      <ValueProposition />
      <FindOutInformation />
      
      <Outlet fallback={null} />
      <Footer />
      <DespreHero />

    </>
  );
};
