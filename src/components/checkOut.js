import React from 'react';
import './cart.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const CheckOut=(props)=>{
    
    let items=  props.items.map((item, index)=>{
        return (
            <li key ={index} className="row " style={{marginBottom:'10px'}}> 
                <div className="col-sm-4">
                    <img className="card-img-top img-responsive" src={item.Poster}/>
                </div>
                    <div className="col-sm-8">
                         <div className="checkOut-info-center">
                         <h6><Link to={ '/'+item.imdbID } > {item.Title}</Link></h6>
                         <div className="flex">
                         <span className="float-left"> Price: ${ item.Quantity * Number((item.imdbID.substr(6, 3)))}</span>
                         <div className="cart-btn-group"><i className="fas fa-minus-circle"></i> {item.Quantity} <i className="fas fa-plus-circle"></i></div>
                         </div>
                         </div>
                    </div>
                
                <hr />
            </li>
           
        );
    });
           
    return(
        <div  className="mt-65 container">  
        <ul style={{padding:'0'}}>  
           {items}
        </ul>  
        
        </div>
            
    )   
}
export default CheckOut;