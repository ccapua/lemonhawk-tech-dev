import React, { useState, useContext } from 'react';
import Header from './components/Header/Header.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Footer from './components/Footer/Footer.js';
import WebDevPage from './components/WebDevPage/WebDevPage.js';
import eBayPage from './components/eBayPage/eBayPage.js';
import { AppContext } from './contexts/AppContext.js';

function App() {
  const [page, setPage] = useState('landing');

  const changePage = function(clicked) {
    switch (clicked) {
      case 'landing':
        setPage('landing');
        break;
      case 'web-dev':
        setPage('web-dev');
        break;
      case 'eBay':
        setPage('eBay');
        break;
      default:
        break;
    }
  };

  const displayPage = function() {
    switch (page) {
      case 'landing':
        return (
          <div>
            <Header changePage={changePage}/>
            <LandingPage/>
            <Footer/>
          </div>
        );
      case 'web-dev':
        return (
          <div>
            <Header changePage={changePage}/>
            <WebDevPage/>
            <Footer/>
          </div>
        );
      case 'eBay':
        return (
          <div>
            <Header changePage={changePage}/>
            <eBayPage/>
            <Footer/>
          </div>
        )
      default:
        return (
          <div>
            <Header changePage={changePage}/>
            <LandingPage />
            <Footer/>
          </div>
        );
    }
  }

  return (
    <div className="app">
      {displayPage()}
    </div>
  );
}

export default App;
