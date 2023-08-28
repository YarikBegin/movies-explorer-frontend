import React from "react";
import "./Page404.css";
import { Link } from 'react-router-dom';

function Page404() {
  return(
    <main className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__text">Страница не найдена</p>
      <Link to={-1} className="page-error__btn">
        Назад
      </Link>
    </main>
  );
}

export default Page404;