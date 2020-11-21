import React, { Component } from 'react';
import bgImg from './img/bg.jpg';
import Logo from './img/pi_black_large.png';
import { 
  Button
} from 'reactstrap';
import { Parallax } from 'react-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class App extends Component {
  render() {

    const anchor = {
      color: "#dfdfdf",
      margin: "15px",
      textDecoration: 'none'
    };

    const titleText = {
      color: "#ffffff",
      fontFamily: "Spoqa Han Sans",
      fontWeight: "bold",
      fontSize: "3em"
    }
    const normalText = {
      color: "#ffffff",
      fontFamily: "Spoqa Han Sans"
    }

    return (
      <fragment>
        <section id='main'>
          <nav style={{textAlign: "center", backgroundColor: '#262a30', padding: '15px', height: '80px', position: 'sticky'}}>
            <ul>
              <ui>
                <AnchorLink href="#main" style={anchor}>main</AnchorLink>
              </ui>
              <ui>
                <AnchorLink href="#introduce" style={anchor}>introduce</AnchorLink>
              </ui>
              <img src={Logo} style={{height: '50px', marginLeft: '15px', marginRight: '15px'}}></img>
              <ui>
                <AnchorLink href="#project" style={anchor}>project</AnchorLink>
              </ui>
              <ui>
                <AnchorLink href="#contact" style={anchor}>contact</AnchorLink>
              </ui>
            </ul>
          </nav>
          <Parallax blur={0} bgImage={bgImg} strength={-200}>
              <div style={{width: '100%', height: '855px', textAlign: 'center', display: 'table'}}>
                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <h2 style={titleText}>Welcome!</h2>
                  <p style={normalText}>Programming, Aritifical Intelligence, Hacking</p>
                  <hr color="#555555" width="20%"></hr>
                  <AnchorLink href="#introduce"><Button color="primary" style={{marginTop: "10px"}}>Check it out</Button></AnchorLink>
                </div>
              </div>
          </Parallax>
        </section>
        <section id='introduce'>
          <div style={{width: '100%', height: '500px', backgroundColor: '#222222', textAlign: 'center'}}>
            <p style={titleText}>Introduce</p>
          </div>
        </section>
        <section id='project'>
          <div style={{width: '100%', height: '500px', backgroundColor: '#222222', textAlign: 'center'}}>
            <p style={titleText}>project</p>
          </div>
        </section>
        <section id='contact'>
          <div style={{width: '100%', height: '500px', backgroundColor: '#222222', textAlign: 'center'}}>
            <p style={titleText}>contact</p>
          </div>
        </section>
      </fragment>
    );
  }
}

export default App;
