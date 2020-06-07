import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Square from '../../components/Square';
import PerformanceChart from '../../components/Charts/PerformanceChart';

const Home = () => {
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
            top='5rem'
            left='3rem'
            width='2rem'
            animation='rotate-right'
          />
          <Technology
            src={require('../../assets/gear.png')}
            top='6rem'
            left='4.8rem'
            width='2.2rem'
            animation='rotate-left'
          />
          <Technology
            src={require('../../assets/gear.png')}
            top='7.5rem'
            left='3.5rem'
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
  height: calc(100vh - 3rem);

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

  p {
    margin: 0;
  }
`;

const Bubble = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20rem;
  top: 12rem;
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  background: ${Colors.purple};
  transition: 0.25s;
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

  animation: float-vertical 20s infinite;
`;

export default Home;
