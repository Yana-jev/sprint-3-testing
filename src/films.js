const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies)


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  var result = array.filter( el => el.director === director)
  .map(el => el.title)
  return console.log(result)
}
getMoviesFromDirector(movies,'Milos Forman')


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = array
    .filter(el => el.director === director)
    .map(el => el.score);

  if (scores.length === 0) {
    console.log(`No movies found for director: ${director}`);
    return;
  }

  let averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
  console.log(averageScore);
}

moviesAverageOfDirector(movies, 'Francis Ford Coppola');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const movieAbc = array.map(name => name.title)
  .sort((a,b) => {
    if (a.toLowerCase() < b.toLowerCase()){
        return -1
    } if (a.toLowerCase()>b.toLowerCase()){
        return 1
    } else {return 0}
  })
  const movies20 = movieAbc.slice(0, 20)
  console.log(movies20)
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
  const filteredMovies = movies.filter(movie => movie.genre === genre);
  if (filteredMovies.length === 0) return NaN;

  const totalRating = filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);
  return totalRating / filteredMovies.length;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



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
