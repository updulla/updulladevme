import React from "react";

const experienceContent = [
  {
    year: "   2014 - 2015",
    position: "BAC",
    compnayName: "Bachelor of Science SVT",
    details: `Lycée ALWAHDA, Tiznit`,
  },
  {
    year: "2015 - 2019",
    position: " Licence",
    compnayName: "Bachelor of Mathematics & Computer Sciences",
    details: `Faculté polydisciplinaire IBN ZOHR, Ouarzazate`,
  },
  {
    year: "2019",
    position: "Last Study's Project",
    compnayName: "Python",
    details: `Smart Personal Assistant using Raspberry Pi3`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
