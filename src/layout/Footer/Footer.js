import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

const Footer = () => {
  return (
    <ThisSection>
      © {new Date().getFullYear()} Nmoerror. All rights reserved.
    </ThisSection>
  );
};

const ThisSection = styled.div`
  text-align: center;
  color: rgba(30, 30, 30, 0.4);

  @media screen and (max-width: 600px) {
    margin: 1rem 0 2rem;
  }
`;
export default Footer;
