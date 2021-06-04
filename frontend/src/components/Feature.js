import React from "react";
import styled from "styled-components";
import product4 from "../images/the-special-request.jpg";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>The Special Request (V)</h1>
      <p>
        Tomato base, fior de latte, garlic mushrooms, truffle oil, rocket,
        balsamic glaze
      </p>
      <p>£8</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${product4});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  line-height: 1.4;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;
const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #0c052e;
  transition: 0.2s ease-out;
  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
