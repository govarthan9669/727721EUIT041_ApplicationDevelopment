import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Grocery from './Grocery';
import HomeSliderImg from './HomeSliderImg';
import Categories from './Components/Categories';
import Shop from './Components/Shop';





const Home = () =>{
    return(
        <div>
            
        <section id="Home"> 
        
       
        <Shop/>


         
         </section>
       
         <HomeSliderImg/>
         
            
        
        
       
        <Header />
        <Grocery/>
        
            
        
        <Contact />
        <Footer />
        </div>
    )
}

export default Home;