import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Popular from './Components/Popular/Popular';
import Hero from './Components/Hero/Hero';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';
import accessories_banner from './Components/Assets/banner_accessories.png'
import cadets_banner from './Components/Assets/banner_cadets.jpeg'
import gifts_banner from './Components/Assets/banner_gifts.png'
import stationery_banner from './Components/Assets/banner_stationery.jpeg'
import uniform_banner from './Components/Assets/banner_uniform.jpeg'
import OrderConfirmation from './Pages/OrderConfirmation';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ShopCategory category="all"/>}/>
        <Route path='/accessories' element={<ShopCategory banner={accessories_banner} category="accessories"/>}/>
        <Route path='/stationery' element={<ShopCategory banner={stationery_banner} category="stationery"/>}/>
        <Route path='/uniform' element={<ShopCategory banner={uniform_banner} category="uniform"/>}/>
        <Route path='/cadet corps' element={<ShopCategory banner={cadets_banner} category="cadet corps"/>}/>
        <Route path='/gifts' element={<ShopCategory banner={gifts_banner} category="gifts"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;