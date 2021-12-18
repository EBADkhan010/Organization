import React from "react";

const cards = ({profilename, profileemail, imageprofile}) => {

  return (


      <div class="card mb-3 user-cards">
      <div class="row  g-3">
        <div class="col-2 col-md-4 col-lg-2">
          <img src={imageprofile} class="img-fluid rounded-start" alt="..." width="100%" />
        </div>
        <div class="col-10 col-md-8 col-lg-10">
          <div class="card-body">
  <h5 class="card-title"> <a href="#">{profilename}</a> </h5>
  <p class="card-text"><a href="#">{profileemail}</a></p>
          </div>
        </div>
      </div>
    </div>



);


};

export default cards;