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
      institution: "Sri Chaitanya Junior College",
      degree: "Higher School",
      year: "2019-2021",
    },
    {
      institution: "Coursera",
      degree: "UX Design Professional Certificate",
      year: "2022",
    },
    {
      institution: "G Pullaiah College of Engineering and Technoloy",
      degree: "Computer Science and Engineering",
      year: "2021 - 2025",
    },
  ];

  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education-grid" style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {educationDetails.map((edu, index) => (
          <div className="education-cell" key={index}>
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
