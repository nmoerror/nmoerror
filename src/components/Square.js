import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const Square = ({ title, subtitle, children }) => {
  return (
    <ThisSection>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      <Overlay className='nmoerror-square-overlay'>
        <span>Learn more</span>
        <Arrow className='nmoerror-arrow' src={require('../assets/next.png')} />
      </Overlay>
    </ThisSection>
  );
};

const ThisSection = styled.div`
  position: relative;
  height: 12rem;
  min-width: 12rem;
  max-width: 12rem;
  background: white;
  border-radius: 1.4rem;
  top: 0;
  margin: auto 1rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  cursor: pointer;

  box-shadow: rgba(50, 50, 50, 0.2) 0px 1px 20px;
  overflow: hidden;

  &:hover {
    transform: translate3d(0, -0.5rem, 0);
    .nmoerror-square-overlay {
      top: 80%;
    }

    .nmoerror-arrow {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 1500px) {
    height: 10rem;
    min-width: 10rem;
    max-width: 10rem;

    h3 {
      margin: 1rem;
    }

    p {
      display: none;
    }

    &:hover {
      .nmoerror-arrow {
        transform: translate(100%, -50%);
        opacity: 1;
      }
    }

    @media screen and (max-width: 500px) {
      height: 6.5rem;
      min-width: 6.5rem;
      max-width: 6.5rem;
    }
  }
`;

const Title = styled.h3`
  font-weight: 300;
  margin: 2rem auto auto 1rem;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    margin: 1rem auto auto 0.5rem !important;
  }
`;

const Subtitle = styled.p``;

const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  height: 20%;
  width: 100%;
  transition: 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  span {
    margin: auto;
    font-size: 0.8rem;
    transition: 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    color: ${Colors.blackLighter};
  }
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  right: 2.5rem;
  transform: translate(340%, -50%);
  opacity: 0;
  transition: 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Square;
