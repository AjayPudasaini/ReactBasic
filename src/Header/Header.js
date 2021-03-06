import React,{Component} from 'react'
import { Link } from "react-router-dom";


class Header extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-white rounded bg-white fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">e-Learn!</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }

}


export default Header