import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';
import logo from './image/logo.png';
import loader from './image/loader.png';

class App extends React.Component{
  state = {
    isLoading : true,
    movies :[],
  }
  
  getMovies =async() =>{
    const {
      data:{
        data: {movies},
      },
    }=await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return (
      
      <section className="container">
        <header className="App-header"><img src={logo} alt="" /></header>
        <body>
       {isLoading?(
         <div className = "loader">
           <span className ="loader__img"><img id="loading-image" src={loader} alt=""/></span>
         </div>) : (
           <div className ="movies">
             {movies.map((movie)=>(
                  <Movie 
                    key = {movie.id}
                    id={movie.id}
                    year ={movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.large_cover_image}
                    backimg={movie.background_image}
                    genres = {movie.genres}
                  />
             ))
           }   
           </div>
           
         )}</body>
    </section>
     
   
    );
  }
}

export default App;
