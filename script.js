"use strict";
/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("просмотренно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hideen) {
        if (!hideen) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt((`Ваш любимые жанр через запятую `)).toLowerCase();
            if (genres === '' || genres == null) {
                console.log('вы ввели неккореткные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};