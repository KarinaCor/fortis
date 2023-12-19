import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FindOutInformation } from "../FindOutInformation/FindOutInformation";



export const LayOut = () => {
  return (
    <>
      <Header />
      
      
      <Outlet fallback={null} />
      <FindOutInformation/>
      <Footer />
      {/* <DespreHero /> */}

    </>
  );
};
