import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../assets/style/style.css';
import desktop from '../assets/img/home/desktop.png';
import mobile from '../assets/img/home/mobile.png';




function Home() {
    return (
      <div className='background-container'>
          <div className="home-container">
            <div className="text">Encontrá  confiterías, cafés, panaderías, patisserie, boulangerie, chocolaterías y pastelerías de la ciudad.</div>
            <img src={desktop} alt="desktop" className="desktop" />
            <img src={mobile} alt="mobile" className="mobile" />
            <Link id='link' to="/confmaps/maps">Ver mapa</Link>
          </div>
      </div>
    )
  }
  
  export default Home