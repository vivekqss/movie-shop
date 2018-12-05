import React from 'react';
import './notFound.css';

const NotFound=(props)=>{
    return(
        <div className="loader">
        <div className="loaderContent">
              <div className="errorIcon"> :-(</div>
              <div className="errormsg"> Movie not found</div>
          <div> <p className="errorText">
            The server is busy and can't respond to your request. Please try again later
            </p></div>
          <div className="refreshtext"> Refresh the page <span className="reloadIcon">&#x21bb;</span></div>
        </div>
        </div>
    )   
}
export default NotFound;