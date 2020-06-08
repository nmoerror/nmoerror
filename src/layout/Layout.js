import React, { Fragment, useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Modal from '../components/Modal';

const Layout = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      {modal && <Modal closeModal={() => setModal(false)} />}
      <Header openModal={() => setModal(true)} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
