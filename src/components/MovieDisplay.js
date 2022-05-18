import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import '../App.css';



const API_KEY = '&api_key=89e57dcae9771ece73cf9ab5b6d61244'
let base_url = 'https://api.themoviedb.org/3'
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_KEY

let arr = ['Popular','InTheatre','Drama','Comedy','Kids']



function MovieDisplay() {

  const [movies, setMovies] = useState([])
  const [url_set, setUrl] = useState(url)


  useEffect(() => {
    fetch(url_set)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        setMovies(data.results)
      })
  }, [url_set])


  const getData=(movieType)=>{
    if(movieType === 'Popular'){
      url = base_url + '/discover/movie?sort_by=popularity.desc' + API_KEY
    }

    if(movieType === 'InTheatre'){

      url = base_url+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'+API_KEY

    }

    if(movieType === 'Drama'){
      url = base_url+'/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'+API_KEY
    }

    if(movieType === 'Comedy'){

      url = base_url+'/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc'+API_KEY
    }

    if(movieType === 'Kids'){
      url = base_url+'/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'+API_KEY
    }

    setUrl(url)
  }



  return (
    <div className="wrapper">


      <div className="header">

        <nav>
          <ul>

          {
            arr.map((value)=>{
              return(

                <li><a href='#' name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>

              )
            })
          }
            
          </ul>
        </nav>

        <form>
          <div className='search-btn'>
            <input type='text' placeholder='Enter movie name' className='inputText'></input>
            <button><i className="fas fa-search"></i></button>

          </div>
        </form>

      </div>


      <div className='container'>

      {movies.length === 0 ? <p className='notfound'>Not found</p> : movies.map((res, pos) => {

        return (
          <Cards info={res} key={pos} />
        )
      })}

</div>


    </div>

  )
}

export default MovieDisplay;