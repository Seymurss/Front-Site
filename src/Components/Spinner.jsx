import React from "react";
import "../assets/Css/Spinner.css"; 
const Spinner = () => {
  return (
    <div className="spinner center">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="spinner-blade"></div>
      ))}
    </div>
  );
};

export default Spinner;
