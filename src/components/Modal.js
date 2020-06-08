import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

const Modal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const checkInputs = () => {
    if (!name || !company || !email || !phone || !message) {
      alert('All fields are required!');
    }
  };

  return (
    <ThisSection>
      <Cross
        src={require('../assets/close.png')}
        onClick={() => closeModal()}
      />
      <Title>Contact Form</Title>
      <Form>
        <Line>
          <Label>Full Name</Label>
          <Input
            disabled
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            required
            placeholder='William Smith'
          />
        </Line>
        <Line>
          <Label>Company</Label>
          <Input
            disabled
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type='text'
            required
            placeholder='SSA Ltd'
          />
        </Line>
        <Line>
          <Label>Email</Label>
          <Input
            disabled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            required
            placeholder='Will@mail.com'
          />
        </Line>
        <Line>
          <Label>Phone</Label>
          <Input
            disabled
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='phone'
            required
            placeholder='04 XXXXXXXX'
          />
        </Line>
        <Line>
          <Label>Message</Label>
          <Textarea
            disabled
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            required
          />
        </Line>
      </Form>

      <Submit disabled onClick={() => checkInputs()}>
        We'll be back soon!
      </Submit>
    </ThisSection>
  );
};

const ThisSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 34rem;
  min-height: 70vh;
  max-height: 90vh;
  background: white;
  border-radius: 1.5rem;
  box-shadow: rgba(50, 50, 50, 0.2) 0px 1px 20px;
  opacity: 0.8;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
  animation: nmoerror-modal-appear 0.15s linear forwards;
  z-index: 10000;
  overflow: scroll;

  text-align: center;
  padding: 0 3rem;
  box-sizing: border-box;

  @media screen and (max-width: 560px) {
    width: 95%;
    min-height: 80vh;
    padding: 0 1rem;
  }
`;

const Title = styled.h2``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 70%;
  padding: 0.8rem 0 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background: rgba(241, 241, 241, 1);
  outline: none;
  border: 1px solid rgba(241, 241, 241, 1);
  opacity: 0.2;

  &:hover {
    border: 1px solid ${Colors.lightPurple};
  }
  &:focus {
    border: 1px solid ${Colors.purple};
  }

  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Textarea = styled.textarea`
  width: 70%;
  padding: 0.8rem 0 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background: rgba(241, 241, 241, 1);
  outline: none;
  min-height: 10rem;
  resize: vertical;
  border: 1px solid rgba(241, 241, 241, 1);
  opacity: 0.2;

  &:hover {
    border: 1px solid ${Colors.lightPurple};
  }
  &:focus {
    border: 1px solid ${Colors.purple};
  }

  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Label = styled.span``;

const Submit = styled.button`
  border: none;
  color: ${Colors.purple};
  font-size: 1rem;
  cursor: not-allowed;
  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.4rem 1.6rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${Colors.almostInvisible};
  margin: 1.4rem 0;
  float: right;

  @media screen and (max-width: 500px) {
    position: absolute;
    right: 0.5rem;
  }

  &:hover {
    color: ${Colors.white};
    background: ${Colors.purple};
    border: 1px solid ${Colors.faded};
    box-shadow: 0 3px 8px rgba(25, 25, 25, 0.2);
  }

  @media screen and (max-width: 560px) {
    margin: 1.4rem 0.5rem;
  }
`;

const Cross = styled.img`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  cursor: pointer;
  padding: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.2);
  }
`;

export default Modal;
