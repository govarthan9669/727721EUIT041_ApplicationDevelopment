import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from './image1.jpg';

const App = () => {
  const appStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  const sliderImgStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  };

  return (
    <div style={appStyle}>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        <img src={image1} alt="" style={sliderImgStyle} />
        <img src={image1} alt="" style={sliderImgStyle} />
      </AliceCarousel>
    </div>
  );
};

export default App;
