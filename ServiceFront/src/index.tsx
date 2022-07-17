import React from 'react'; //Импортим сам реакт
import ReactDOM from 'react-dom';  //Подключаем библиотеку ReactDOM

import './scss/App.css';
import App from './App'; // Подключаем входной компоннент app

import reportWebVitals from './reportWebVitals';// определяет ошибки в приложении

ReactDOM.render( // Рендерим входной компоннент с помощью  ReactDOM
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
