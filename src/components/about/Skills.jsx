import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "HTML5" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS3" },
  { skillClass: "p30", skillPercent: "30", skillName: "Javascript" },
  { skillClass: "p40", skillPercent: "40", skillName: "PHP" },
  { skillClass: "p30", skillPercent: "30", skillName: "Vue.js" },
  { skillClass: "p25", skillPercent: "25", skillName: "Python" },
  { skillClass: "p75", skillPercent: "75", skillName: "Git" },
  { skillClass: "p90", skillPercent: "90", skillName: "Linux System" },
  { skillClass: "p90", skillPercent: "90", skillName: "UML Modeling" },
  { skillClass: "p80", skillPercent: "80", skillName: "Raspberry Pi" },
  { skillClass: "p85", skillPercent: "85", skillName: "Wordpress / Woocommerce" },
  { skillClass: "p45", skillPercent: "45", skillName: "Web Penetration Testing" },
  { skillClass: "p50", skillPercent: "50", skillName: "Advertising (Facebook Ads/Tiktok Ads ..)" },
  { skillClass: "p70", skillPercent: "70", skillName: "Point of Sale System & App" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
