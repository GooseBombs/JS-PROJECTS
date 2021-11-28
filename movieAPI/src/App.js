import react, { useEffect } from 'react';
import './style.css';
import MainHeader from './Companents/Header';
import { Bootstrap } from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AllMovies from './Companents/MovieSection';
import React,{useState} from 'react';
import axios from 'axios';


const  App = () => {

  const [movies,setMovies] = useState([]);

    
  useEffect(() =>{
     axios.get("http://localhost:3500/movies")
     .then((response) =>setMovies(response.data))
     
     

  },[])
     

    

   const deletedMovie = (movie)=>{
      const newMovieList = movies.filter(
        m => m.id !== movie.id
      );
      setMovies(movies=>(
        movies = newMovieList
      ))
    }



  

    return (
      <div>
        <MainHeader/>
        
        <AllMovies
        movies={movies}
        deleteMovie={deletedMovie}/> 
      </div>
  
    );
  }



  

    

export default App;
