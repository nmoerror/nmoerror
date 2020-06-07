import React from 'react';
import styled from 'styled-components';

import Colors from '../../constants/Colors';
import Service from './Service';

const Services = () => {
  return (
    <ThisSection>
      <AboutThis>
        <span>Learn more about the future</span>
      </AboutThis>
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </ThisSection>
  );
};

const ThisSection = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  width: max-content;
  color: ${Colors.white};
  padding: 4rem 0 0 3rem;
  background: rgba(44, 0, 73, 1);
`;

const AboutThis = styled.div`
  padding: 1rem 0;
  min-width: 20rem;
  display: flex;
  width: 20rem;

  span {
    margin: auto 0;
  }
`;

export default Services;
