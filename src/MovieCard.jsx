import React from 'react';

const MovieCard = ({movie}) => {
//     const movie=
//   {
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }
    return (
        <div className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster !== 'N/A'? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
    );
};

export default MovieCard;