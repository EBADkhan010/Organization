import React from "react";


const search = ({className, text, placeholder}) => {

  return (

   
     
        <input className={` form-control me-2 rounded-pill custom-search ${className ? className : ""}`} type="search" placeholder={placeholder} aria-label="Search" />
        
     

 



  );


};

export default search;