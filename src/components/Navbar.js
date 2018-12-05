import React from 'react';
import Cart from './cart';
import SearchResult from'./searchResult';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Navbar=(props)=>{

    return(
        <nav className="navbar navbar-expand-md shadow navbar-dark fixed-top bg-dark">
      <a href="#" className="navbar-brand"><span style={{color:'#ff1d1d', fontSize:'23px', paddingRight:'1px'}}>M</span>obi<span style={{color:'#ff1d1d', fontSize:'23px', padding:'1px'}}>S</span>tore</a>
      <button className="navbar-toggler" onClick={props.toggle} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className= {props.togleClass?"collapse navbar-collapse":"navbar-collapse collapse show"} id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
          <Link to="/Movies" className="nav-link"> Movies </Link>
          </li> */}
        </ul>
        <form className="form-inline mt-2 mt-md-0 center shadow" style={{position:'relative' , }}>
                 <input className="form-control mr-sm-2" style={{paddingLeft:'35px' }} onChange={(e)=>props.searchString(e)} value={props.search}  type="text" placeholder="Search" aria-label="Search" />
                 <i className="fas fa-search "  style={{position:'absolute' ,left:"10px", color:'#989898', top:'51.7%', transform:"translateY(-50%)" }}></i>
                 <div className="btn btn-primary shadow"  style={{position:"relative"}} onClick={props.cartHandler}><i className="fas  fa-shopping-cart"></i>
        {/* <SearchResult searchResult={props.searchResult} /> */}
        


        </div>
        <div className="btn ml-2" > <i className="fas fa-user shadow" style={{color:'#ffffff', fontSize:'22px', position:'relative',top:'1px' }}></i>

        </div>
        </form>
      </div>
    </nav>
    )

}
export default Navbar;