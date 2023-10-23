import './App.css';
import PreNavbar from './components/preNavbar.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from './components/Slider.jsx';
//import data from './data/data.json'
import Offers from './components/Offers.jsx'
import Headers from './components/Headers.jsx'
import StarProduct from './components/StarProduct.jsx'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.jsx'
import HotAccessories from './components/HotAccessories.jsx'
import ProductReviews from './components/ProductReviews.jsx'
import Videos from './components/Videos.jsx'  
import Banner from './components/Banner.jsx'  
import Footer from './components/Footer.jsx'
import NavOptions from './components/NavOptions.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from './reducer/action.js'

function App() {
  
  const dispatch = useDispatch()

  const data = useSelector(state => state.data.data)

  console.log()
  
  return (
  <>
    {fetchData(dispatch)}
    <Router>
      <PreNavbar/>
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptops={data.laptop} lifestyle={data.fitnessAndLifeStyle} home={data.home} radio={data.radio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Headers text='STAR PRODUCTS' />
      <StarProduct StarProduct={data.starProduct} />
      <Headers text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
    

      <Routes>
        <Route exact path='/music'
          element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

        <Route exact path='/smartDevices'
          element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        
        <Route exact path='/home'
          element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        
        <Route exact path='/lifestyle'
          element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        
        <Route exact path='/mobileAccessories'
          element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Headers text='PRODUCT REVIEWS' />
      <ProductReviews productReviews={data.productReviews} />
      
      <Headers text='VIDEOS' />
      <Videos videos={data.videos} />
      
      <Headers text='IN THE PRESS' />
      <Banner banner={data.banner} />
      
      <Footer footer={data.footer}/>

      </Router>
      </>

  );

}

export default App;
