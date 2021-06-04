import React from "react";
import styled from "styled-components";

const Locations = ({ data }) => {
  return (
    <LocationsContainer>
      <Heading>Where To Find Us</Heading>
      <LocationWrapper>
        {data.map((location, index) => {
          return (
            <LocationCard key={index}>
              <LocationImg src={location.img} alt={location.name} />
              <LocationInfo>
                <LocationTitle>{location.address}</LocationTitle>
                <LocationDesc>{location.desc}</LocationDesc>
                <LocationTime>{location.time}</LocationTime>
              </LocationInfo>
            </LocationCard>
          );
        })}
      </LocationWrapper>
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

const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const LocationCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 500px;
`;

const LocationImg = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
`;

const LocationTitle = styled.h2`
  font-weight: unset;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background-color: #1a2535;
  color: #fff;
`;

const LocationDesc = styled.p`
  margin-bottom: 1rem;
`;

const LocationTime = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: monospace, serif;
`;
