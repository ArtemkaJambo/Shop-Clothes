import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import NewSlider from "./components/NewSlider/NewSlider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import PrivatPolicy from "./components/Footer/PrivatPolicy/PrivatPolicy"
import Shop from "./components/Shop/Shop"
import ShopContextProvider from "./components/context/ShopContext"
import BoughtProducts from "./components/boughtProducts/BoughtProducts"
import PublicOffer from "./components/Footer/PublicOffer/PublicOffer"
import OplataAndDelivery from "./components/Footer/OplataAndDelivery/OplataAndDelivery"
import Exchange from "./components/Footer/Exchange/Exchange"
import Care from "./components/Footer/Care/Care"
import Outwear from "./components/Catalogue/Outwear/Outwear"
import Hoody from "./components/Catalogue/Hoody/Hoody"
import TShirts from "./components/Catalogue/TShirts/TShirts"
import Trousers from "./components/Catalogue/Trousers/Trousers"

const App = () => {
  return (
    <ShopContextProvider>

        <BrowserRouter>
        <ScrollToTop></ScrollToTop>
          <Header />
          
          <Routes>
            <Route path="/" element={<NewSlider />} /> 
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/boughtgoods" element={<BoughtProducts></BoughtProducts>}></Route>

          {/* Catalogue */}

              <Route path="/outwear" element={<Outwear></Outwear>}></Route>
              <Route path="/hoody" element={<Hoody></Hoody>}></Route>
              <Route path="/T-Shirts" element={<TShirts></TShirts>}></Route>
              <Route path="trousers" element={<Trousers></Trousers>}></Route>
          {/* Catalogue */}

            {/* Footer */}
                <Route path="/privacy-policy" element={<PrivatPolicy></PrivatPolicy>}></Route>
                <Route path="/public-offer" element={<PublicOffer></PublicOffer>}></Route>
                <Route path="/oplata" element={<OplataAndDelivery></OplataAndDelivery>}></Route>
                <Route path="/exchange" element={<Exchange></Exchange>}></Route>
                <Route path="/care" element={<Care></Care>}></Route>
            {/* Footer */}

          </Routes>
          <Footer />
        </BrowserRouter>
        
    </ShopContextProvider>
  )
}

export default App
