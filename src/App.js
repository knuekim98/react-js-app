import React, { Component } from 'react';
import bgImg from './img/bg.jpg';
import Logo from './img/pi_black_large.png';
import { 
  Button
} from 'reactstrap';
import { Parallax } from 'react-parallax';

class App extends Component {
  render() {

    const navMenu = {
      color: "#dddddd",
      margin: "15px"
    };

    return (
      <fragment>
        <nav style={{textAlign: "center", backgroundColor: '#262a30', padding: '15px', height: '80px'}}>
          <ul>
            <ui style={navMenu}>main</ui>
            <ui style={navMenu}>introduce</ui>
            <img src={Logo} style={{height: '50px', marginLeft: '15px', marginRight: '15px'}}></img>
            <ui style={navMenu}>project</ui>
            <ui style={navMenu}>contact</ui>
          </ul>
        </nav>
        <Parallax blur={0} bgImage={bgImg} bgImageAlt="the cat" strength={-200}>
          <h2>hi</h2>
          <p>dfdfdsfsdfasda</p>

          {/*
          <div>
            <img src={mainLogo} style={circleImg}></img>
            <h2>knuekim98</h2>
          </div>
          <div>
            hello react
          </div>
          <Button color="danger">Danger!</Button>
          */}

        </Parallax>
      </fragment>
    );
  }
}

export default App;
