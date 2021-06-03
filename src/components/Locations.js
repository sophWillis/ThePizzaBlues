import React from "react";
import styled from "styled-components";

const Locations = () => {
  return (
    <LocationsContainer>
      <ProductsHeading>Where To Find Us</ProductsHeading>
    </LocationsContainer>
  );
};

export default Locations;

const LocationsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 30px;
  background-color: #fdfdf6;
  color: #0c052e;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
