"use strict";


const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 1; i++) {
    const a = prompt('один из последних просмотренный фильмов?', ''),
        b = prompt("на сколько оцените его?", '');

    if (a != null && b != null && a != '' && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    personalMovieDB.movies[a] = b;

}

if (personalMovieDB.count < 10) {
    console.log("просмотренно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDB);