import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();
  const movies = [
    {
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAuJSLWJ9IqG2XImulEyL0exVV-bhC15wMnnkH3_GF9_Sk9Uo',
      name: 'Форсаж',
      timeOfTheFilm: '1ч 46м',
      isSave:'+',
    },
    {
      link: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrodln2kd1EmGQfqjkEwZ-9fRDszOJl_LZX6_vBTqjqYpmXgw6',
      name: 'Двойной форсаж',
      timeOfTheFilm: '1ч 48м',
      isSave: '+',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/05/Thefastandthefurioustokyodrift_bigearlyposter.jpg/211px-Thefastandthefurioustokyodrift_bigearlyposter.jpg',
      name: 'Форсаж 3',
      timeOfTheFilm: '1ч 44м',
      isSave: '',
    },
    {
      link: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSADrdO9_LmxFkT35kLzbSP0eRMQnyAPKIfCsTCQbXaO2Y_97Nl',
      name: 'Форсаж 4',
      timeOfTheFilm: '1ч 47м',
      isSave:'',
    },
    {
      link: 'https://images.justwatch.com/poster/10645323/s592/fast-five',
      name: 'Форсаж 5',
      timeOfTheFilm: '2ч 10м',
      isSave: '+',
    },
    {
      link: 'https://kinohod.ru/o/75/71/75711996-97a2-11e2-b909-32ef512b1169.jpeg',
      name: 'Форсаж 6',
      timeOfTheFilm: '2ч 10м',
      isSave: '',
    }
  ]; 

  return (
    <section className='galery' aria-label='секция с фильмами'>
      {movies.map(movie => (
        (location.pathname === '/saved-movies' && movie.isSave === '') || location.pathname !== '/saved-movies' ? (
          <MoviesCard
            key={movie.name}
            link={movie.link}
            name={movie.name}
            timeOfTheFilm={movie.timeOfTheFilm}
            isSave={movie.isSave}
          />
        ) : null
      ))}
    </section>
  );
}

export default MoviesCardList;