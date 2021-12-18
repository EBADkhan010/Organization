import React from "react";




const AccordianItems = ({ accItemData }) => {
  let id = `accItemData${accItemData.id}`
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
          <span className="counter">{accItemData.counts}</span>{accItemData.title}
        </button>
      </h2>
      <div id={id} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul>
            {accItemData.items.map((val, ind) => <li key={ind}>
              <span className={`counter ${val.icon}`}><i class="fa fa-info"></i></span> {val.name}
            </li>)}
          </ul>

        </div>
      </div>
    </div>
  )

}



const accordians = (props) => {
  const {classContainer , data} = props;
  const { headerClass } = classContainer;

  return (
    <div className="accdorains_wrapper">
      <div className={`accdorains-head ${headerClass ? headerClass : ""}`}>
        <h1>Available Roles</h1>
      </div>

      <div class="accordion accordion-flush custom-accordians" id="accordionFlushExample">
        {data.map((val, ind) => <AccordianItems accItemData={val} key={ind} />)}

        {/* <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <span className="counter">4</span>Accordion Item #1
      </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <ul>
                <li>
                <span className="counter">4</span> abc
                </li>
                <li>
                <span className="counter">4</span> abc
                </li>
              </ul>
             
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <span className="counter">4</span>Accordion Item #2
      </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <span className="counter">4</span> Accordion Item #3
      </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div> */}
      </div>
    </div>


  );

};

export default accordians;