import React from "react";

const Education = () => {
  // Education details
  const educationDetails = [
    {
      institution: "Sri Lakshmi High School",
      degree: "Schooling",
      year: "2009-2019",
    },
    {
      institution: "Sri Chaitany Junior College",
      degree: "Higher School",
      year: "2019-2021",
    },
    {
      institution: "G Pullaiah College of Engineering and Technology",
      degree: "Bachelor's in Engineering",
      year: "2021-2025",
    },
    {
      institution: "Coursera",
      degree: "UX Design Professional Certificate",
      year: "6 Months",
    },
  ];

  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education-grid" style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {educationDetails.map((edu, index) => (
          <div className="box" key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
