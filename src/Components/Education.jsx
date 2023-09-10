import React from "react";

const Education = () => {
  // Education details
  const educationDetails = [
    {
      institution: "Sri Lakshmi High School",
      degree: "Schooling",
      year: "2000-2012",
    },
    {
      institution: "Sri Chaitany Junior College",
      degree: "Higher School",
      year: "2012-2014",
    },
    {
      institution: "Coursera and Google",
      degree: "UX Design Professional Certificate",
      year: "2022",
    },
    {
      institution: "G Pullaiah College of Engineering and Technology",
      degree: "Computer Science and Engineering",
      year: "2021-2025",
    },
  ];

  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div className="education-grid">
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
