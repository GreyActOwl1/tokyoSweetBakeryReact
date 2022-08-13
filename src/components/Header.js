import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Form } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../app/assets/img/TS&B-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar light sticky="top" expand="lg">
      <NavbarBrand className="d-inline-flex" href="/">
        <img src={logo} alt="" href="/" width="30" height="30" className="" /> <div className="d-none d-sm-block pl-2">TS Bakery</div>
      </NavbarBrand>
      <Form className="mr-auto d-flex" inline>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-secondary" type="submit">
          <span className="d-sm-none">
            <i className="fa fa-search"></i>
          </span>
          <span className="d-none d-sm-block">Search</span>
        </button>
      </Form>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link btn btn-secondary" to="/cart">
              {" "}
              <i className="fa fa-shopping-cart"></i> <span className="d-inline d-md-none d-lg-inline">Your Cart</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
