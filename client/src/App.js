import React from 'react';
import './App.scss';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

        <Header/>

        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <Header/>
            </div>
            <div className={'column is-half tile'}>
                <Header/>
            </div>
        </div>

        <div className={'columns is-gapless'}>
            <div className={'column is-one-quarter tile'}>
                <Header/>
            </div>
            <div className={'column tile'}>
                <Header/>
            </div>
        </div>

    </div>
  );
}

export default App;
