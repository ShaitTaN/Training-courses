import React from "react";
import { useFetchAllProductsQuery } from "../../api/apiSlice";
import About from "../../components/about/About";
import Course from "../../components/course/Course";
import "./coursesPage.scss";

const CoursesPage = () => {
  const { data: courses } = useFetchAllProductsQuery(5);

  return (
    <div className="coursesPage">
      <div className="container">
        <h1 className="coursesPage__title">Специализированные дисциплины</h1>
        <div className="coursesPage__courses">
          {courses?.map((course) => (
            <Course course={course} />
          ))}
        </div>
        <About />
      </div>
    </div>
  );
};

export default CoursesPage;
