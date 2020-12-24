import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

const Header = ({ openModal }) => {
  const [activeColor, setActiveColor] = useState(Colors.white);

  const triggerOpen = (color) => {
    setActiveColor(color);
  };

  return (
    <ThisSection activeColor={activeColor}>
      <Logo>Nmoerror</Logo>
      <List>
        <Li onClick={() => triggerOpen(Colors.blue, 'About')}>
          <span>About</span>
        </Li>
        <Li onClick={() => triggerOpen(Colors.green, 'Services')}>
          <span>Services</span>
        </Li>
        <Li onClick={() => triggerOpen(Colors.black, 'Technology')}>
          <span>Pricing Guide</span>
        </Li>
      </List>
      <Button onClick={() => openModal()}>Contact Us</Button>
    </ThisSection>
  );
};

const ThisSection = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 6rem;
  display: flex;
  align-items: center;
  color: ${Colors.faded};
  background: ${Colors.white};
  //box-shadow: 0 3px 8px rgba(25, 25, 25, 0.1);
  padding: 0 3rem;
  transition: 0.4s;

  @media screen and (max-width: 500px) {
    padding: 0 2rem;
    ul {
      display: none;
    }
  }
`;

const Logo = styled.h2`
  color: ${Colors.purple};
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
  padding: 0;
  margin: 0 0 0 auto;
`;

const Li = styled.li`
  height: 100%;
  transition: 0.25s;
  padding: 0 2rem;
  display: flex;
  cursor: not-allowed;

  span {
    margin: auto;
  }

  &:hover {
    color: ${Colors.purple};
  }
`;

const Button = styled.button`
  border: none;
  color: ${Colors.purple};
  font-size: 1rem;
  cursor: pointer;
  transition: 0.25s;
  padding: 0.4rem 1.6rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${Colors.almostInvisible};
  margin-left: 2rem;

  @media screen and (max-width: 500px) {
    position: absolute;
    right: 1rem;
  }

  &:hover {
    color: ${Colors.white};
    background: ${Colors.purple};
    border: 1px solid ${Colors.faded};
    box-shadow: 0 3px 8px rgba(25, 25, 25, 0.2);
  }
`;

export default Header;
