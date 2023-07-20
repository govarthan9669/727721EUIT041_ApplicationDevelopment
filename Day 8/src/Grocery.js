
import React from 'react';
import Header from './Header';
import Shop from './Components/Shop2';
import Product from './Components/Product';
import ProductList from './Components/ProductsList2';



const Grocery = () =>{
    return(
      <div>
        <sectionGr id="Grocery">
            <Shop/>
           
        </sectionGr>
        <Header />
        </div>
    )
}

export default Grocery;