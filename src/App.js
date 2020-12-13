import React from 'react';
import GivenDataContextProvider from './contexts/data-context';
import ChartCanvas from './components/ChartCanvas';
import CardCanvas from './components/card-canvas';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/right-side-bar';
import TopMenuBar from './components/TopMenuBar';
import InputForm from './components/form';
import './App.css';
const App = () => {
  return (
    <div className="App">
        <LeftSideBar />
        <div className="middle-content">
        <TopMenuBar />
          <GivenDataContextProvider>
            <div className="same-side">
              <ChartCanvas />
            </div>
            <div>
              <InputForm />
            </div>
            <CardCanvas />
          </GivenDataContextProvider>
        </div>
        <RightSideBar />
    </div>
  );
}


export default App;
