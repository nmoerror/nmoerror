import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Colors from '../../constants/Colors';
import Drawer from '../Drawer/Drawer';

const Column = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerColor, setDrawerColor] = useState(Colors.black);
  const [drawerChild, setDrawerChild] = useState(AboutSection);

  const openDrawer = (color, view) => {
    setDrawerColor(color ? color : Colors.black);

    switch (view) {
      case 'About':
        setDrawerChild(AboutSection);
        break;
      case 'Services':
        setDrawerChild(ServicesSection);
        break;
      case 'Technology':
        setDrawerChild(TechnologySection);
        break;
      default:
        setDrawerChild('');
    }
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <ThisSection>
      <Header openDrawer={openDrawer} closeDrawer={closeDrawer} />
    </ThisSection>
  );
};

const ThisSection = styled.div`
  position: relative;
  width: 40%;
  height: 100vh;
  background: ${Colors.white};

  margin: 0 10% 0 auto;
  overflow-x: hidden;
  transition: 0.4s;

  &:hover {
    border-right: 1px solid ${Colors.darkFaded};
    border-left: 1px solid ${Colors.darkFaded};
    width: 45%;
    margin: 0 8% 0 auto;

    .asdf {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default Column;
