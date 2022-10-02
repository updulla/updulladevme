import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "certificate",
    institute: "The Complete Web Developer Course 2.0",
    details: `https://www.udemy.com/course/the-complete-web-developer-course-2/`,
  },
  {
    year: "2020",
    degree: "certificate",
    institute: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    details: `https://www.udemy.com/course/100-days-of-code/`,
  },
  {
    year: "2021 - 2022",
    degree: "Freelancer ",
    institute: "Front-End Developper",
    details: `Fiverr.com, Mostaql.com`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
