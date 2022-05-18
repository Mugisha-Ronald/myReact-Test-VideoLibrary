import React, {useEffect,useState} from 'react'

import '../App.css';

//const API_KEY = '89e57dcae9771ece73cf9ab5b6d61244'
 


function MovieDisplay() {

  const [movie, setMovie] = useState([])

  useEffect(()=>{

    let apiData = 'https://api.themoviedb.org/3/movie/550?api_key=89e57dcae9771ece73cf9ab5b6d61244'
        fetch(apiData)
        .then((response)=>{
           return response.json()
            })
        .then((data)=>{
            
          setMovie(data)
            console.log(data)

          })
          .catch((error)=>{
              console.log(error)
  
          })
  
      })

  
  return (
    <div className="wrapper">
    <div className="header">
    
      <nav>

        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">

          <i className="fas fa-bars" ></i>
        </label>
        <div class="logo">
          <p>TheMoviePlanet</p>
        </div>
        <ul>
          <li><input type="text" placeholder="Search movies.."/></li>
          <li><a href="google.com">Movies</a></li>
          <li><a href="google.com">Account</a></li>
          <li><a href="google.com"><button>GO TO CART</button></a></li>
        </ul>
      </nav>
    </div>

    <div className="cards_wrap">
      <div className="card_item">
        <div className="card_inner">
          <img src={movie.backdrop_path}  alt='movieImage'/>
          <div className="role_name">{movie.original_title}</div>
          <div className="real_name">{movie.tagline}</div>
          <div className="film">{movie.overview}</div>
        </div>
      </div>
      
    </div>
  </div>

  )
}

export default MovieDisplay;