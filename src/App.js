import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavPanel from './component/Nav/NavPanel';
import Header from './component/HeaderComp/Header';
import FooterPlayer from './component/Footer/FooterPlayer';
import HomePage from './pages/HomePage';
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <NavPanel />
      <Header />
      <div className="content-area">
        <HomePage />
      </div>
      <FooterPlayer />
    </div>
  );
};

export default App;

