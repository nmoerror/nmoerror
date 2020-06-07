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
`;
export default Footer;
