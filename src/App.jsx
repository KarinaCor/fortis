// import { Acasa } from "./pages/Acasa/Acasa";
// import { Comenzi } from "./pages/Comenzi/Comenzi";
// import { Contact } from "./pages/Contact/Contact";
// import { DespreNoi } from "./pages/DespreNoi/DespreNoi";
// import { Produse } from "./pages/Produse/Produse";
import { LayOut } from "./common/components/LayOut/LayOut";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Acasa = lazy(() => import("./pages/Acasa/Acasa"));
const Comenzi = lazy(() => import("./pages/Comenzi/Comenzi"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const DespreNoi = lazy(() => import("./pages/DespreNoi/DespreNoi"));
const Produse = lazy(() => import("./pages/Produse/Produse"));


function App() {
  return (
    <>
    <Suspense>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Acasa />} />
          <Route path="despreNoi" element={<DespreNoi />} />
          <Route path="produse" element={<Produse />} />
          <Route path="comenzi" element={<Comenzi />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;



