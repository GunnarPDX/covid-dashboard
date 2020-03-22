import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Twitter from "./components/twitter/Twitter"
import Navigation from "./components/atoms/Navigation";
import Footer from "./components/atoms/Footer";
import TotalPercentages from "./components/TotalPercentages";
import Map from "./components/Map";
import NewsFeed from "./components/NewsFeed";

function App() {

  return (
    <div className="App">

        <Navigation/>


        <Header/>

        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <Map/>
            </div>
            <div className={'column is-half tile'}>
                <Twitter/>
            </div>
        </div>


        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <TotalPercentages />
            </div>
            <div className={'column tile'}>
                <NewsFeed />
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default App;
