
import React from "react";
import './LoadingSpinner.css'; 

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <img src="https://picsum.photos/200/300" alt="Loading..." className="spinner" />
    </div>
  );
};

export default LoadingSpinner;
