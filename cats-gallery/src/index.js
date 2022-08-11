import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StaticPart from './StaticPart';
import girlDog from './img/girl-and-pet 1.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <StaticPart />
    <div className="girlDog "> 
        <img className="imgGirlDog " src={girlDog} alt="girl and pet"/>
    </div>
  </main>
);

