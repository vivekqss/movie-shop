import React from 'react';
import Movie from './movie';
import Notfound from './NotFound';
import Cart from './cart'
const Movies=(props)=>{
    
    return(
        <div className={props.navToggle?'mt-56 container-fluid':'mt-140 container-fluid'}  >
        <div className="container">
        <Cart cart={props.cart}  showCart={props.showCart}/>
        <div className="row">
        {
             props.search==null? <Notfound />  :(props.search.map((item,index)=><Movie info={item} addIndex={props.addToCart} mobiDetailIndex={props.mobiDetailIndex}  addToCart={props.addToCart} ind={index}/>))
        }
        </div>  
        </div>  
        </div>
    )   
}
export default Movies;