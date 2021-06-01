import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
function Header(props) {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            {props.searchbar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:"no search bar"}
          </div>
        </div>
      </nav>
    </div>
    );
}

export default Header;
Header.defaultProps = {
  title: "Title by default",
  searchbar:true
}
Header.propTypes={
  title:PropTypes.string.isRequired,
  searchbar:PropTypes.bool.isRequired
}