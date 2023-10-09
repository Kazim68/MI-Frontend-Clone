import './App.css';
import PreNavbar from './components/preNavbar.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import Slider from './components/Slider.jsx';
import data from './data/data.json'
import Offers from './components/Offers.jsx'

function App() {

  return (

    <Router>
      <PreNavbar/>
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
    </Router>

  );

}

export default App;
