import React from 'react';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import vegi from './vegi.jpg';
import vegi2 from './vegi2.jpg';
import vegi3 from './vegi3.png';
import Fruit from './Fruit.jpg';
import f2 from './f2.jpg';
import Choclate from './Choclate.jpg';

const App = () => {
  const appStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  const sliderImgStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    marginTop: '50px',
    
  };

  return (
    <div style={appStyle}>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        <img src={vegi} alt="" style={sliderImgStyle} />
        <img src={Choclate} alt="" style={sliderImgStyle} />
        <img src={vegi2} alt="" style={sliderImgStyle} />
        <img src={Fruit} alt="" style={sliderImgStyle} />
        <img src={vegi3} alt="" style={sliderImgStyle} />
        <img src={f2} alt="" style={sliderImgStyle} />
      </AliceCarousel>
    </div>
  );
};

export default App;
