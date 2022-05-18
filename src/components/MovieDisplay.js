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
          <li><a href="#">Movies</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#"><button>GO TO CART</button></a></li>
        </ul>
      </nav>
    </div>

    <div className="cards_wrap">
      <div className="card_item">
        <div className="card_inner">
          <img src="black_panther.png" />
          <div className="role_name">Black Panther</div>
          <div className="real_name">Chadwick Boseman</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="doctor_strange.png" />
          <div className="role_name">Doctor Strange</div>
          <div className="real_name">Benedict Cumberbatch</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="black_widow.png" />
          <div className="role_name">Black Widow</div>
          <div className="real_name">Scarlett Johansson</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="Spider_man.png" />
          <div className="role_name">Spider Man</div>
          <div className="real_name">Tom Holland</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="black_widow.png" />
          <div className="role_name">Black Widow</div>
          <div className="real_name">Scarlett Johansson</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="black_panther.png" />
          <div className="role_name">Black Panther</div>
          <div className="real_name">Chadwick Boseman</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="Spider_man.png" />
          <div className="role_name">Spider Man</div>
          <div className="real_name">Tom Holland</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="card_item">
        <div className="card_inner">
          <img src="doctor_strange.png" />
          <div className="role_name">Doctor Strange</div>
          <div className="real_name">Benedict Cumberbatch</div>
          <div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt aliqua.</div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default MovieDisplay