import React from 'react';
import styled from 'styled-components';

import Colors from '../../constants/Colors';

const Service = () => {
  return <ThisSection>a service</ThisSection>;
};

const ThisSection = styled.div`
  height: 100%;
  min-width: 26rem;
  width: 24rem;
  background: transparent;
  border-right: 1px solid rgba(81, 0, 116, 1);
  border-left: 1px solid rgba(81, 0, 116, 1);
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background: rgba(81, 0, 116, 0.4);
    border-right: 1px solid rgba(91, 0, 126, 1);
    border-left: 1px solid rgba(91, 0, 126, 1);
  }
`;

export default Service;
