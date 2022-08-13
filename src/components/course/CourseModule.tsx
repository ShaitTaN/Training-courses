import React, { FC, useState } from "react";
import { specializedSubject } from "../../models/IProduct";
import { CSSTransition } from "react-transition-group";
import "./courseModule.scss";

interface Props {
  number: number;
  subjects: specializedSubject[];
}

const CourseModule: FC<Props> = ({ number, subjects }) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="course__module">
      <h3
        onClick={onClick}
        className={
          isActive ? "course__module-title active" : "course__module-title"
        }
      >
        <span></span> {number} модуль
      </h3>
      <ul className="course__module-text list">
        {subjects.map((subject) => (
          <li>{subject.string}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseModule;
