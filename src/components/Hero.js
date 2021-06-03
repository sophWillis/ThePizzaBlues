import React from "react";
import styled from "styled-components";
import Video from "../video/ouroven.mp4";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Wood Fired Neapolitan Pizza</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: calc(100vh - 140px);
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  height: 100%;
  display: flex;
`;

const HeroItems = styled.div`
  padding-left: 30px;
  color: #fff;
  line-height: 1.4;
  overflow: hidden;
  z-index: 2;
`;

const HeroH1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: min-content;

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

const HeroP = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background-color: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #f9f4ba;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #1a2535;
  }
`;
