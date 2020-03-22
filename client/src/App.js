import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TotalPercentages from "./components/TotalPercentages";
import MapHeader from "./components/MapHeader";

function App() {



  return (
    <div className="App">

      <Navigation/>

        {/* <MapHeader/> */}


        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <Header/>
            </div>
            <div className={'column is-half tile'}>
                <Header/>
            </div>
        </div>

        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <TotalPercentages/>
            </div>
            <div className={'column tile'}>
                <Header/>
            </div>
        </div>


        <Footer/>

    </div>
  );
}

export default App;
