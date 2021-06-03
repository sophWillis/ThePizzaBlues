import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import LogoImg from "../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo src={LogoImg} />
        </NavLink>
        <Bars onClick={toggle} />
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 140px;
  padding: 30px;
  z-index: 3;
`;

const NavLink = styled(Link)``;

const Logo = styled.img`
  height: 80px;
`;

const Bars = styled(HiOutlineMenuAlt4)`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;
