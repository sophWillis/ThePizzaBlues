import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import LogoImg from "../images/logo.png";
import { animateScroll } from "react-scroll";
import { menuData } from "../data/menuData";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  const changeNav = () => {
    window.scrollY >= window.innerHeight
      ? setScrollNav(true)
      : setScrollNav(false);
    window.scrollY >= 80 ? setHideMenu(true) : setHideMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavLogo to="/" onClick={scrollToTop}>
          <img src={LogoImg} alt="The Pizza Blues Logo" />
        </NavLogo>
        <Bars onClick={toggle} scrollNav={scrollNav} />
        <NavMenu hideMenu={hideMenu}>
          {menuData.map((item, index) => (
            <NavLink
              to={item.link}
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              className={item.className}
              key={index}
            >
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavLink to="cart" className="cartLink">
          <Cart scrollNav={scrollNav} />
        </NavLink>
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

const NavLogo = styled(Link)`
  img {
    height: 80px;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  height: fit-content;

  &.btn {
    background-color: #e31837;
    padding: 10px;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }

  &:not(.cartLink) {
    padding: 0 15px 10px;
  }

  &.cartLink {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Bars = styled(HiOutlineMenuAlt4)`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#1a2535")};
    font-size: 2rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: ${({ hideMenu }) => (hideMenu ? "none" : "flex")};
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Cart = styled(TiShoppingCart)`
  font-size: 2rem;
  color: ${({ scrollNav }) => (scrollNav ? "#1a2535" : "#fff")};
`;
