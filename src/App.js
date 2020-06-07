import React from 'react';
import './App.css';
import styled from 'styled-components';
import Colors from './constants/Colors';

import Layout from './layout/Layout';
import Services from './screens/Services/Services';
import Home from './screens/Home/Home';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
