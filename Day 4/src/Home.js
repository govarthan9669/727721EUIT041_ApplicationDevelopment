import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Grocery from './Grocery';
import HomeSliderImg from './HomeSliderImg';


const Home = () =>{
    return(
        <div>
        <section id="Home">
            <HomeSliderImg></HomeSliderImg>
           
        </section>
        <Header />
        <Grocery />
        <About />
        <Contact />
        <Footer />
        </div>
    )
}

export default Home;