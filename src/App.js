import './App.css';
import PreNavbar from './components/preNavbar.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import Slider from './components/Slider.jsx';

function App() {

  return (

    <Router>
      <PreNavbar/>
      <Navbar/>
    </Router>

  );

}

export default App;
