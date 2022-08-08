"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a;

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотренно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB(hideen) {
    if (!hideen) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();