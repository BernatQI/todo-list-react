import React from "react";
import BernatQiLogoTransparente from '../img/bernatqi-logo-transparente.png';
import '../stylesheets/BernatQiLogo.css';

function BernatQiLogo() {
  return (
    <div className='bernatqi-logo-container'>
      <img
        src={BernatQiLogoTransparente}
        className='bernatqi-logo'
        alt='Logo BernatQi' />
    </div>
  );
}

export default BernatQiLogo;