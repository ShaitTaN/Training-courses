import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__cards">
        <div className="about__card practice">
          <h2 className="about__card-title">Практические модули</h2>
          <div className="about__card-text">
            Работа над собственными проектами: практика групповых
            взаимодействий, кейс-методы, эссе
          </div>
        </div>
        <div className="about__card result">
          <h2 className="about__card-title">Итоговая аттестация</h2>
          <ul className="about__card-text list">
            <li>
              Бизнес-проектирование (подготовка итоговой аттестационной работы,
              консультирование по бизнес-проектированию)
            </li>
            <li>Защита итоговой аттестационной работы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
