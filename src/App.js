import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Notfound from './components/NotFound';
import MovieDetail from './components/movieDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import CheckOut from './components/checkOut';

class App extends Component {
  constructor(){
    super();
    this.state={
      movieDetails:{},
      navToggle:'false',
      movies:'',       
      searchText:'',
      displayCart:false,
      search:[{
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
      Title: "Manchester by the Sea",
      Type: "movie",
      Year: "2016",
      imdbID: "tt4034228",
      mobiDetailIndex:null,      
     }],
     cart:[{
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
      Title: "Manchester by the Sea",
      Type: "movie",
      Year: "2016",
      imdbID: "tt4034228",
      Quantity:1,
     }]     
    }
  }
  movieDetl=[{}]
   searchmovie=(e)=>{
     let mobi=fetch('http://www.omdbapi.com/?s='+ e.target.value +'&apikey=34d9da6c')
     .then(response => response.json())
      .then(data => {
         
        if(!(data.Search==undefined)){
          //console.log(data.Search)   
          this.setState({search:data.Search})
        }  
        });
      this.setState({
        searchText: e.target.value    
      })
      //console.log(this.state.search)
      //   let newResult=this.state.search.map((data)=>{
      //    fetch('http://www.omdbapi.com/?i=' + data.imdbID +'&apikey=34d9da6c')
      //    .then(response => response.json)
      //    .then(data=> console.log("\n TTId"+newResult))
      // })
  }
  
  showCartHandler=()=>{
    let show=this.state.displayCart;
    show=show?false:true;
    console.log("showCart  :"+show);
    this.setState({
      displayCart:show
    })
  }
  callCartHandler=()=>{
    this.CartHandler(this.state.mobiDetailIndex);
  }

  CartHandler=(index1)=>{    
    //check if item exist in cart then inscrease Quentity of items
    let search=JSON.parse(JSON.stringify( this.state.search ));
    search=search[index1];
    search.Quantity=1;
    let Cart= [...this.state.cart];
    //console.log(search.imdbID);
    console.log(Cart);
    console.log(search.imdbID)
    console.log(this.state.search)
    let j=null;
    for(let i=0;i<Cart.length;i++){
      if(search.imdbID===Cart[i].imdbID){
        j=i;
      }
    }
    if(j!=null){      
      Cart[j].Quantity=Cart[j].Quantity + 1;         
      console.log("if");
    }
    else{
      console.log(search);
      console.log("else")
      Cart.push(search);
    }

    this.setState({
      cart:Cart
    })  
  }


  addToCartByIMDBID=()=>{

  }
  mobiDetailIndex=(index)=>{
    console.log(index)
      this.setState({
        mobiDetailIndex:index
      })
  }
  
  handleNavtoggle=()=>{
    let toggle= this.state.navToggle?false:true;
    this.setState({navToggle:toggle})
    
  }
  handleMovieDetails=(data)=>{
    this.setState({
      movieDetails:data
    })
  }
  
  render() {
    return (
      <div >
      <Navbar search={this.state.searchText} searchResult={this.state.Search} toggle={this.handleNavtoggle} togleClass={this.state.navToggle} searchString={this.searchmovie}  cartHandler={this.showCartHandler}  />
      <BrowserRouter>
      <Switch>      
        <Route exact path="/"  render={()=> <Movies navToggle={this.state.navToggle} mobiDetailIndex={this.mobiDetailIndex} cart={this.state.cart} showCart={this.state.displayCart}  search={this.state.search}  addToCart={this.CartHandler} />} />
        <Route path="/check-out" render={()=> <CheckOut items={this.state.cart} />} />
        <Route path="/:id" exact render={(props)=> <MovieDetail navToggle={this.state.navToggle} cart={this.state.cart} showCart={this.state.displayCart} {...props} HandleMobi={this.handleMovieDetails} movieDetails={this.state.movieDetails} addToCart={this.callCartHandler}/>} />
        <Route path="/" render={()=> <Notfound />} />
        </Switch>
      </BrowserRouter>
      {/* */}
          
      </div>     
    );
  }
}
export default App;