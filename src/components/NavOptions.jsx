import React, {useState, useEffect} from 'react'
import NavCard from './NavCard.jsx'
import '../styles/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, laptops, lifestyle, home, radio, accessories }) => {
    
    const [miPhoneToggle, setMiPhoneToggle] = useState(false)
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false)
    const [tvToggle, setTvToggle] = useState(false)
    const [laptopToggle, setLaptopToggle] = useState(false)
    const [lifestyleToggle, setLifestyleToggle] = useState(false)
    const [homeToggle, setHomeToggle] = useState(false)
    const [radioToggle, setRadioToggle] = useState(false)
    const [accessoriesToggle, setAccessoriesToggle] = useState(false)

    useEffect(() => {
        if (window.location.pathname === '/miphones') {
            return setMiPhoneToggle(true)
        }
        if (window.location.pathname === '/redmiphones') {
            return setRedmiPhoneToggle(true)
        }
        if (window.location.pathname === '/tv') {
            return setTvToggle(true)
        }
        if (window.location.pathname === '/laptops') {
            return setLaptopToggle(true)
        }
        if (window.location.pathname === '/lifestyle') {
            return setLifestyleToggle(true)
        }
        if (window.location.pathname === '/home') {
            return setHomeToggle(true)
        }
        if (window.location.pathname === '/radio') {
            return setRadioToggle(true)
        }
        if (window.location.pathname === '/accessories') {
            return setAccessoriesToggle(true)
        }

    }, [])

  return (
      <div className='navOptions'>
          {
              miPhoneToggle ? miPhones.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

          {
              redmiPhoneToggle ? redmiPhones.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              tvToggle ? tv.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              laptopToggle ? laptops.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              lifestyleToggle ? lifestyle.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              homeToggle ? home.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              radioToggle ? radio.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

            {
              accessoriesToggle ? accessories.map((item, index) => (
                  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
              )):null
          }

    </div>
  )
}

export default NavOptions