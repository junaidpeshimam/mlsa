import React from "react";

const Education = () => {
  const educationStyles = {
    backgroundColor: "#F2E2C7", // Background color
    padding: "20px", // Padding for the section
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Box shadow for a subtle effect
  };

  const schoolStyles = {
    borderBottom: "2px solid #6C63FF", // Border color for each school
    padding: "10px 0", // Padding for each school item
    marginBottom: "10px", // Spacing between schools
  };

  return (
    <section style={educationStyles} id="education">
      <h2 style={{ color: "#6C63FF" }}>My Education</h2>
      <div style={schoolStyles}>
        <h3 style={{ color: "#FF8C42" }}>Sri Lakshmi High School</h3>
        <p>Completed my schooling with flying colors.</p>
      </div>
      <div style={schoolStyles}>
        <h3 style={{ color: "#FF8C42" }}>Sri Chaitanya Junior College</h3>
        <p>Successfully completed my Higher School education.</p>
      </div>
      <div style={schoolStyles}>
        <h3 style={{ color: "#FF8C42" }}>G Pullaiah College of Engineering and Technology</h3>
        <p>Currently pursuing my graduation in an exciting engineering journey.</p>
      </div>
    </section>
  );
};

export default Education;
