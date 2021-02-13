import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='container'>
    <Header />
    <Aside />
    <Content />
    <Footer />
  </div>
);

export default App;
