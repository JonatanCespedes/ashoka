import React, {useEffect, useState} from 'react';
/* External resources */
import Aos from 'aos';
import "aos/dist/aos.css";

/* General style sheet */
import './General.css'

/* Components */
import Header from './Components/Header';
import Slider from './Components/Slider/Slider';
import Video from './Components/VideoSection/Video';
import Ready from './Components/ReadySection/Ready';
import Way from './Components/Way/Way';
import MapSection from './Components/MapSection';
import Filter from './Components/FilterSection';
import Countdown from './Components/Countdown/Countdown';
import Photo from './Components/Photo/Photo';
import Knowmore from './Components/Know-more/Knowmore';
import Allies from './Components/Allies/Allies';
import Contact from './Components/Contact-Form/Contact';
import Footer from './Components/Footer/Footer';
import Fellows from './Components/Fellows/Fellows';

function App() {

  useEffect(() => {
    Aos.init({duration: 1000}); 
  }, []);

  const [mapProvince, setMapProvince] = useState()
  console.log(mapProvince)
  return (
    <div className="general">
       <Header/> 
       <Slider/>
       <Video/>
       <Ready/>
       <Way/>
       <MapSection setMapProvince={setMapProvince} mapProvince={mapProvince}/>
       <Filter mapProvince={mapProvince}/>
       <Countdown/>
       <Photo/>
       <Knowmore/>
       <Fellows/>
       <Allies/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
