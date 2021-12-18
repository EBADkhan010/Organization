import React from "react";


class Header extends React.Component {
  render() {
    return (

      <div className="header">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Oraganization</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse menu-wrap" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a  className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      English (USA) 
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> 
                  </li>
                  <li class="nav-item second-nav-menu">
                    <a class="nav-link " href="#">University of London</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link name-li" href="#">M</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </div>



    );
  }

};

export default Header;