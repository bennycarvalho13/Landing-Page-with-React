
import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <div className="text-start">
    <p className="text-light h5">Start Bootstrap</p>
    </div>
    <div className="text-end">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className=" collapse navbar-collapse justify-content-md-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contract</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}

export default Navbar;