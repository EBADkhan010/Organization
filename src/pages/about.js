import React from "react";
import Search from "../components/search";
import Button from "../components/button";
import Cards from "../components/cards";
import Accordians from "../components/accordians";
import profile from "../assets/profile.png";
import Tabs from "../components/tabs"

// import Profileimg from "../assets/profile.png";




class About extends React.Component {
  dataAcc1 = [{
    title: 'Static Data (MM only)',
    counts: 4,
    id:'11',
    items: [{
      icon: 4,
      name: "asdad"
    },
    {
      icon: 2,
      name: "asdad"
    }
    ]
  },
  {
    title: 'Organisations (MM only)',
    counts: 2,
    id:'12',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Users',
    counts: 3,
    id:'13',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Question Creation (MM only)',
    counts: 2,
    id:'14',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Question Creation',
    counts: 2,
    id:'135',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  }
  ]
  dataAcc2 = [{
    title: 'Static Data (MM only)',
    counts: 4,
    id:'20',
    items: [{
      icon: "fa-info",
      name: "asdad"
    },
    {
      icon: 2,
      name: "asdad"
    }
    ]
  },
  {
    title: 'Organisations (MM only)',
    counts: 2,
    id:'21',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Users',
    counts: 3,
    id:'22',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Question Creation (MM only)',
    counts: 2,
    id:'24',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  },
  {
    title: 'Question Creation',
    counts: 2,
    id:'25',
    items: [{
      icon: 1,
      name: "asdad"
    },
    {
      icon: 'fa-mail',
      name: "asdad"
    }
    ]
  }
  ]
  render() {
    return (
      <div>
        <section className="search-area">
          <div class="container pt-3">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-4 resp-mb">
                <div className="d-flex">
                  <Search className={"oraginzationsearch"} placeholder={"Organization Search"} />
                  <Button className={"oraginzationsearchbtn"} textbtn={"Search"} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <Button className={"advancesearchbtn"} textbtn={"Advance Search"} />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-4 text-right">
                <Button className={"float-end"} textbtn={"New Organization"} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container pt-4">
            <div class="row">
              <div className="col-md-12">
                <div class="card about-card">
                  <div class="card-header">
                    About Organization
                  </div>
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 ">
                <Tabs tabHeading={{ headingOne: "Basic information", headingTwo: "Users", headingThree: "Notes" }} tabContainer={{ tabHeaderClass: "pt-3 mt-3 px-3 vh-100" }} tabNameContainer={{ tabName: "mb-3" }}>
                  <div className="row tab_inner">
                    <div className="col-12 col-md-4 sidebar-height">
                      <div className="tab_sidebar">
                        <div className="tab-search">
                          <Search placeholder={"User Search"} />
                        </div>
                        <div className="listusers">
                          <Cards profileemail={"abc@gmail.com"} profilename={"abc"} imageprofile={profile} />
                          <Cards profileemail={"abc@gmail.com"} profilename={"abc123"} imageprofile={profile} />
                          <Cards profileemail={"abc@gmail.com"} profilename={"abc"} imageprofile={profile} />
                          <Cards profileemail={"abc@gmail.com"} profilename={"abc123"} imageprofile={profile} />
                        </div>
                        <div className="footer">
                          <h1><i class="fa fa-plus-circle"></i> Invite user</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 sidebar-height">
                      
                        <Tabs tabHeading={{ headingOne: "User details", headingTwo: "Roles", headingThree: "Other association" }}>
                          <div className="row p-3 ">
                            <div className="col-md-12 col-lg-12 col-xl-5 ">
                              <Accordians classContainer={{ headerClass: "bg_dark" }} data={this.dataAcc1} />
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-2 align-self-center resp-mtb">
                            <Button className={"w-100 mb-3"} textbtn={"Assign "} />
                            <Button className={"w-100 disabled"} textbtn={"Rescind"} />
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-5">
                              <Accordians classContainer={{ headerClass: "bg_light" }} data={this.dataAcc2} />
                            </div>
                          </div>
                          <div className="row ">
                          <div className="col-md-12">
                            <div className="footer bg-ftr">
                              <Button className={"advancesearchbtn"} textbtn={"Cancel"} />
                              <Button  textbtn={"Update"} />
                            </div>
                          </div>
                          </div>
                        </Tabs>
                    </div>

                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

};

export default About;