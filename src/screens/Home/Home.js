import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Square from '../../components/Square';
import PerformanceChart from '../../components/Charts/PerformanceChart';
import useWindowDimensions from '../../hooks/windowDimensions';

const Home = () => {
  const { height, width } = useWindowDimensions();

  return (
    <ThisSection>
      <Landing>
        <p>
          As your end-to-end technology partner, we engineer modern web & mobile
          software solutions that do not only deliver result and increases
          business efficiency but also allows scalability and future innovation.
          <br />
          <br />
          We choose to work with the latest technologies for optimal security,
          best user experience, latest tech features and most importantly; for
          stable and prolonged usability.
        </p>
      </Landing>
      <Bubble>
        <TinyBubble className='nmoerror-tiny-bubble' />
        <MiniBubble className='nmoerror-mini-bubble' />
        <Square title='Technologies' subtitle=''>
          <Technology
            src={require('../../assets/gear.png')}
            top={width >= 1500 ? '5rem' : width > 600 ? '3rem' : '2.2rem'}
            left={width >= 500 ? '3rem' : '1rem'}
            width='2rem'
            animation='rotate-right'
          />
          <Technology
            src={require('../../assets/gear.png')}
            top={width >= 1500 ? '6rem' : width > 600 ? '4rem' : '3.2rem'}
            left={width >= 500 ? '4.8rem' : '2.7rem'}
            width='2.2rem'
            animation='rotate-left'
          />
          <Technology
            src={require('../../assets/gear.png')}
            top={width >= 1500 ? '7.5rem' : width > 600 ? '5.5rem' : '4.2rem'}
            left={width >= 500 ? '3.5rem' : '1.3rem'}
            width='1.5rem'
            animation='rotate-right'
          />
        </Square>
        <Square title='Performance' subtitle=''>
          <PerformanceChart fill={Colors.purple} back={Colors.lightPurple} />
        </Square>
        <Square title='Demo' subtitle=''>
          <Mobile src={require('../../assets/macbook.png')} />
        </Square>
      </Bubble>
    </ThisSection>
  );
};

const ThisSection = styled.div`
  box-sizing: border-box;
  min-height: calc(100vh - 3rem);

  @media screen and (max-width: 1200px) {
    padding: 8rem 2rem;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    .nmoerror-tiny-bubble,
    .nmoerror-mini-bubble {
      background: ${Colors.lighterPurple};
    }
  }
`;

const Landing = styled.div`
  position: absolute;
  display: flex;
  top: 22rem;
  left: 8rem;
  box-sizing: border-box;
  width: 40rem;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(35, 35, 35, 0.9);

  @media screen and (max-width: 1500px) {
    top: 18rem;
    left: 6rem;
  }

  @media screen and (max-width: 1400px) {
    top: 15rem;
    width: 30rem;
  }

  @media screen and (max-width: 1200px) {
    position: relative;
    margin: auto;
    left: 1rem;
    top: 0;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    left: 0rem;
  }

  p {
    margin: 0;
  }
`;

const Bubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10%;
  top: 12rem;
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  background: ${Colors.purple};
  transition: 0.25s;

  @media screen and (max-width: 1500px) {
    width: 25rem;
    height: 25rem;
  }

  @media screen and (max-width: 1200px) {
    position: relative;
    margin: auto;
    left: 0;
    top: 5rem;
    width: 20rem;
    height: 20rem;
  }

  @media screen and (max-width: 500px) {
    position: relative;
    margin: auto;
    left: 0;
    top: 5rem;
    width: 20rem;
    height: 20rem;
  }
`;

const MiniBubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 1.5rem;
  top: 3rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background: ${Colors.lightPurple};
  transition: 0.25s;

  animation: mini-bubble-float 20s infinite;
`;

const TinyBubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: ${Colors.lightPurple};
  transition: 0.25s;

  animation: tiny-bubble-float 20s infinite;
`;

const Technology = styled.img`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: ${({ width }) => width};
  animation: ${({ animation }) => animation} 2s infinite;
`;

const Mobile = styled.img`
  position: absolute;
  height: 6rem;
  top: 3.2rem;
  left: 4rem;
  transform: rotate(10deg);

  @media screen and (max-width: 1500px) {
    top: 1.5rem;
    left: 3rem;
  }

  @media screen and (max-width: 500px) {
    height: 3rem;
    left: 2rem;
  }
  animation: float-vertical 20s infinite;
`;

export default Home;
