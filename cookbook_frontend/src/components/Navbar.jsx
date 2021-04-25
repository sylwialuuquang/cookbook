import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Cookbook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Ingredients</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li className="nav-item dropdown">
                { 
                    localStorage.getItem('access_token') ?

                <React.Fragment>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hello
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/logout/">Logout</a></li>
                    </ul>
                </React.Fragment>

                :

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login/">Login</a>
                </li>
                }
              </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;