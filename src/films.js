const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies)


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director === director);
}



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(el => el.director === director);
  if (directorMovies.length === 0){
    return NaN
  }
const scoreTotal = directorMovies.reduce((acc, movie) => acc + (movie.score || 0), 0); 
const averageScore = scoreTotal/directorMovies.length

return parseFloat(averageScore.toFixed(2))
}

moviesAverageOfDirector(movies, 'Francis Ford Coppola');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const movieAbc = array.map(name => name.title)
  movieAbc.sort().slice(0, 20);
  return movieAbc.slice(0,20)
}
orderAlphabetically(movies)


// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  return arr.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
  if (filteredMovies.length === 0) return NaN;

  const totalScore = filteredMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
  const averageScore = totalScore / filteredMovies.length;

  return parseFloat(averageScore.toFixed(2));
}




// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(arr) {
  return arr.map(film => {
    const durationArray = film.duration.split(' ');
    let totalMinutes = 0;
    for (const part of durationArray) {
      if (part.includes('h')) {
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        totalMinutes += parseInt(part);
      }
    }
    return { ...film, duration: totalMinutes };
  });
}
  console.log(hoursToMinutes(movies))


// Exercise 8: Get the best film of a year
function bestFilmOfYear(arr, year) {
  const bestFilms = arr.filter(film => film.year === year);

  if (bestFilms.length === 0) {
    return null;
  }

  const bestScore = bestFilms.reduce((a, b) => {
    return a.score > b.score ? a : b;
  });

  return bestScore;
}


bestFilmOfYear(movies, 1946);
console.log(bestFilmOfYear(movies, 1946))



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
