import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright to="/">The Pizza Blues Ltd</Copyright>
      <SocialIcons>
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
          <FaYoutube />
        </SocialIconLink>
        <SocialIconLink
          href="//www.twitter.com/briandesignz"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1a2535;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 26px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 24px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
