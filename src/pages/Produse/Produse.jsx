import { ContainerProducts } from "./ContainerProducts/ContainerProducts";
import { Destribution } from "./Destribution/Destribution";
import { Gallery } from "./Gallery/Gallery";
import { ProduseHero } from "./ProduseHero/ProduseHero";
import { ProduseOffers } from "./ProduseOffers/ProduseOffers";
import { SheetProfile } from "./SheetProfile/SheetProfile";


 const Produse = () => {
    return (
        <>
        <ProduseHero/>
        <ProduseOffers/>
        <Destribution/>
        <SheetProfile/>
        <ContainerProducts/>
        <ContainerProducts/>
        <Gallery/>
        </>
       

    )
}

export default Produse;