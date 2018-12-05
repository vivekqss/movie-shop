import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Img from './img.png'
const Movie=(props)=>{
    return(
        <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mt-2 mb-2 ">   
        
        <div className="card shadow" >
                <img className="card-img-top img-responsive" src={props.info.Poster=="N/A"?Img:props.info.Poster} alt="Card image cap" />
                <div className="card-body">
                <Link to={ '/'+props.info.imdbID } onClick={()=>{ props.mobiDetailIndex(props.ind) }}> <h5 className="card-title ">{props.info.Title}</h5></Link>
                    <hr></hr>
                    <p className="card-text"> Type: {props.info.Type}</p>
                    <p className="card-text"> Price: ${props.info.imdbID.substr(6, 3)}</p>
                    <a className="btn buy cart-link btn-primary shadow" onClick={()=>{props.addToCart(props.ind)}}> <i className="fas fa-shopping-cart"></i> Add to cart</a>
                    <a className="btn btn-primary cart-link shadow"> <i className="fas fa-bolt"></i>  Buy  </a>
                </div>
            </div>           
            </div>
    )   
}
export default Movie;