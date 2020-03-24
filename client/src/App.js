import React from 'react';
import './App.scss';
import Header from "./components/molecules/header/Header";
import Twitter from "./components/molecules/Twitter"
import Navigation from "./components/atoms/Navigation";
import Footer from "./components/atoms/Footer";
import TotalPercentages from "./components/molecules/TotalPercentages";
import Map from "./components/molecules/Map";
import NewsFeed from "./components/molecules/news/NewsFeed";
import MainDash from "./components/views/dashboard/MainDash";

function App() {

  return (
    <div className="App">

        <Navigation/>


        {/*
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
        */}








        <MainDash/>

      <Footer />


    </div>
  );
}

export default App;
