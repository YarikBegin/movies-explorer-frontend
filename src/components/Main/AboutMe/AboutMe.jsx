import React from 'react';
import './AboutMe.css';
import photo from '../../../images/profile.jpeg';

function AboutMe() {
  return (
    <article className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__align'>
          <h3 className='about-me__name'>Ярослав</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</p>
          <p className='about__info-description text'>Я живу в городе Липецк.
          Закончил ВИПС по специальности "Сети связи и системы коммутации". Женат, 2 детей, есть кошка и собака.
          Увлекаюсь страйкболом. В свободное время решаю задачи на codewars. В настоящий момент учусь в Яндекс.Практикуме на веб-разработчика.
          </p>
          <ul className='about-me__contacts'>
            <li className='about-me__contact'>
              <a className='about-me__link' href='https://github.com/YarikBegin' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={photo} alt='Фото студента' />
      </div>
    </article>
  );
}

export default AboutMe;


