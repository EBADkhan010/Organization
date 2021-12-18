import React from "react";


const button = ({className, textbtn}) => {

  return (

     <button type="button" className={` rounded-pill btn btn-primary cutom-btn ${className}`}>{textbtn}</button>





  );


};

export default button;