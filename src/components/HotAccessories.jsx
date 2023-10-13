import React from 'react'
import HotItemCard from './HotItemCard.jsx'
import '../styles/HotAccessories.css'

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, lifestyle, lifestyleCover, home, homeCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
      <div className='hotAccessories'>
          <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt='Cover' />
          </div>
          
          <div>
              {music && music.map((item, index) => (
                    <HotItemCard key={item.image} image={item.image} name={item.name} index={index} price={item.price}/>
                  )
                )
              }

              {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} image={item.image} name={item.name} index={index} price={item.price}/>
                  )
                )
              }   
              
              {home && home.map((item, index) => (
                    <HotItemCard key={item.image} image={item.image} name={item.name} index={index} price={item.price}/>
                  )
                )
              } 
              
              {lifestyle && lifestyle.map((item, index) => (
                    <HotItemCard key={item.image} image={item.image} name={item.name} index={index} price={item.price}/>
                  )
                )
              } 
        
              {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} image={item.image} name={item.name} index={index} price={item.price}/>
                  )
                )
              } 

              <HotItemCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'/>      
        

          </div>
    </div>
  )
}

export default HotAccessories