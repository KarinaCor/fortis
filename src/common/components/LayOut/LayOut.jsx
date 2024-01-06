import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FindOutInformation } from "../FindOutInformation/FindOutInformation";
import { HeaderLine } from "../HeaderLine/HeaderLine";



export const LayOut = () => {
  return (
    <>
    <HeaderLine/>
      <Header />
      
      
      <Outlet fallback={null} />
      <FindOutInformation/>
      <Footer />
      {/* <DespreHero /> */}

    </>
  );
};
