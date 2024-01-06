import { Decor } from "./components/Decor/Decor";
import { Hero } from "./components/Hero/Hero";
import { Introducing } from "./components/Introducing/Introducing";
import { Offers } from "./components/Offers/Offers";
import { ValueProposition } from "./components/ValueProposition/ValueProposition";


 const Acasa = () => {
    return (
        <>
        <Hero/>
        <Decor/>
      <Introducing />
      <Offers />
      <ValueProposition />
     
        </>
       

    )
}

export default Acasa;