import React from 'react';
import Header from '../../components/header/Header';
import MainContent from '../../components/mainContent/MainContent';
import Footer from '../../components/footer/Footer';


const HomePage = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>

  )
}

export default HomePage;