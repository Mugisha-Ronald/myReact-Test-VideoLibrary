import React from 'react'

import '../App.css';

function Cards(movie) {
    //console.log(movie.info)
    let image_path = " https://image.tmdb.org/t/p/w500"
    return (

        <>

            <div className='container'>

                <div className='movies'>
                    <img alt='movieImage' className='poster' src={image_path + movie.info.backdrop_path}></img>

                    <div className='movie-details'>
                        <div className='box'>
                            <h4 className='title'>{movie.info.original_title}</h4>
                            <p className='rating'>{movie.info.vote_average}</p>

                        </div>

                        <div className='overview'>
                            <h1>Description</h1>
                            {movie.info.overview}
                        </div>

                    </div>

                </div>





            </div>
        </>

    )
}

export default Cards