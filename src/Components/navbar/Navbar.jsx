//import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"

import flag from "./spain.png"
const Navbar = () => {


  return (
   
// <!-- Navbar Start -->
<div className="container-fluid nav-bar bg-transparent">
  
    <nav className="navbar navbar-expand-lg navbar-dark py-0 px-4">
    <Link to="/" className="navbar-brand d-flex align-items-center text-center">
    {/* <div className="icon p-2 me-2">
    <FontAwesomeIcon icon={faCity} className="headerIcon" />
    </div> */}
            <h1 className="m-auto navbar-brand d-flex align-items-center">
                <img src={logo} alt="" className=" img-fluid logo" />
            </h1>
        </Link>
        <img src={flag} alt="" className='spainflag' />
        
            
        
        <button type="button" className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="" role="button" ><i class="fa fa-bars text-dark" aria-hidden="true"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
                <a href="/" className="nav-item nav-link active mx-3">Home</a>
                <a href="#about" className="nav-item nav-link mx-3">About Us</a>
                <a href="#real" className="nav-item nav-link mx-3">R.E investment</a>
                {/* <div className="nav-item dropdown">
                    <a href="/#" className="nav-link dropdown-toggle mx-3" data-bs-toggle="dropdown">R.E investment</a>
                    <div className="dropdown-menu rounded-0 m-0">
                        <a href="/#" className="dropdown-item">Villas</a>
                        <a href="/#" className="dropdown-item">Appartement</a>
                        <a href="/#" className="dropdown-item">Luxury Container</a>
                        <a href="/#" className="dropdown-item">Lands</a>
                    </div>
                </div> */}
                <a href="#impexp" className="nav-item nav-link mx-3">Import/Export</a>
                <a href="#Tourist" className="nav-item nav-link mx-3">Tourism</a>
                <a href="#residance" className="nav-item nav-link mx-3">Spanish residency</a>
                <a href="#contact" className="nav-item nav-link mx-3">Contact Us</a>
            </div>
            {/* {user ? user.username : (
          <div className="navItems">
            <button className="btn btn-primary px-3 d-none d-lg-flex">Register</button>
            <button className="btn btn-primary px-3 d-none d-lg-flex">Login</button>
          </div>
        )} */}
        </div>
    </nav>
</div>


  );
};
/* <!-- Navbar End --> */
export default Navbar;
