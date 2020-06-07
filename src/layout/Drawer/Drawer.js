import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

const Drawer = ({ status, bg, children }) => {
  return (
    <ThisSection status={status} bg={bg}>
      {children}
    </ThisSection>
  );
};

const ThisSection = styled.div`
    display flex;
    height: 100%;
    color: ${Colors.black};
    background: ${Colors.white}
    transition: 0.25s;
    padding: 2rem 2rem 0;
`;

export default Drawer;
