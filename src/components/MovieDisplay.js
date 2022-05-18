import React from 'react'
import '../App.css';


function MovieDisplay() {
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
          <img src="black_panther.png"  alt='movieImage'/>
          <div className="role_name">Black Panther</div>
          <div className="real_name">Chadwick Boseman</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      
    </div>
  </div>

  )
}

export default MovieDisplay