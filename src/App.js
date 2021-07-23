import './App.css';

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/';
import Settings from './pages/settings';
import Projects from './pages/projects';
import Skills from './pages/skills';

const initialStyle = {
  "--primary-color": "#312A8D",
  "--secondary-color": "#4F46C8"
}
function App() {
  let [style, setStyle] = useState(initialStyle);

  useEffect(()=>{
    // check local storage for prefernces
    let val = localStorage.getItem('preferences');
    val = val && JSON.parse(val);
    console.log(val)
    setStyle(val);
  }, [])

  const saveStyle = (val) => {
    //updateState
    setStyle(val);
    //store on local storage
    localStorage.setItem('preferences', JSON.stringify(val));
  }

  const resetStyle = () => saveStyle(initialStyle);

  return (
    <BrowserRouter>
      <div className="App theme" style={style}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/react" component={Skills} />
            <Route path="/js" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/settings"><Settings {...style} saveStyle={saveStyle} reset={resetStyle} /></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
