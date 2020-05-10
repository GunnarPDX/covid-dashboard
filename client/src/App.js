import React from 'react';
import './App.scss';
import Navigation from "./components/atoms/Navigation";
import Footer from "./components/atoms/Footer";
import MainDash from "./components/views/dashboard/MainDash";
function App() {

  return (
    <div className="App">

      <Navigation/>
      <MainDash/>
      <Footer />

    </div>
  );
}

export default App;
