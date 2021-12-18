import React from "react";


const Tabs = ({children, tabHeading, tabContainer}) => {
const {headingOne, headingTwo, headingThree} = tabHeading;

// const {tabHeaderClass} = tabContainer;
  return (

    <div className={`custom-tabs ${tabContainer?.tabHeaderClass ? tabContainer?.tabHeaderClass : ""}`}>
    <ul className="nav nav-tabs"  id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="basic_information-tab" data-bs-toggle="tab" data-bs-target={`#${headingOne}`} type="button" role="tab" aria-controls={headingOne} aria-selected="true">{headingOne}</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="users-tab" data-bs-toggle="tab" data-bs-target={`#${headingTwo}`} type="button" role="tab" aria-controls={headingTwo} aria-selected="false">{headingTwo}</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="notes-tab" data-bs-toggle="tab" data-bs-target={`#${headingThree}`} type="button" role="tab" aria-controls={headingThree} aria-selected="false">{headingThree}</button>
      </li>
    </ul>
    <div  id="myTabContent" className="tab-content">
      <div class="tab-pane fade show active" id={headingOne} role="tabpanel" aria-labelledby="basic_information-tab">...</div>
      <div className="tab-pane fade  " id={headingTwo} role="tabpanel" aria-labelledby="users-tab">
        {children}
      </div>
      <div class="tab-pane fade" id={headingThree} role="tabpanel" aria-labelledby="notes-tab">...</div>
    </div>
  </div>





  );


};

export default Tabs;