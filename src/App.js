import React, { Component } from 'react';
import { 
  Button
} from 'reactstrap';
import { Parallax } from 'react-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import bgImg from './img/bg.jpg';
import Logo from './img/pi_black_large.png';
import dataImg from './img/introduce_data.svg';
import programmingImg from './img/introduce_programming.svg';
import securityImg from './img/introduce_secure.svg';
import languagePythonImg from './img/language_python.svg';
import languagePhpImg from './img/language_php.svg';
import languageCImg from './img/language_c.svg';
import languageJavaImg from './img/j.svg';
import languageReactImg from './img/language_react.svg';
import languageGoImg from './img/language_go.svg';
import graphImg from './img/graph.svg';

class App extends Component {
  render() {

    const anchor = {
      color: "#dfdfdf",
      margin: "15px",
      textDecoration: 'none'
    };

    const mainTitleText = {
      color: "#ffffff",
      fontFamily: "Spoqa Han Sans",
      fontWeight: "bold",
      fontSize: "3em"
    }
    const mainNormalText = {
      color: "#ffffff",
      fontFamily: "Spoqa Han Sans"
    }
    
    const titleText = {
      color: "#111111",
      fontFamily: "Spoqa Han Sans",
      fontWeight: "400",
      fontSize: "2.7em",
      marginBottom: "-20px"
    }

    const pgTitleText = {
      color: "#111111",
      fontFamily: "Spoqa Han Sans",
      fontWeight: "bold",
      fontSize: "1.1em",
      marginBottom: "0"
    }
    const pgNormalText = {
      color: "#111111",
      fontFamily: "Spoqa Han Sans",
      fontWeight: "normla",
      fontSize: "1em",
      marginBottom: "0"
    }

    const languageImg = {
      height: '75px', 
      marginRight: '5px'
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
                  <h2 style={mainTitleText}>Welcome!</h2>
                  <p style={mainNormalText}>Programming, Aritifical Intelligence, Hacking</p>
                  <hr color="#555555" width="20%"></hr>
                  <AnchorLink href="#introduce"><Button color="primary" style={{marginTop: "10px"}}>Check it out</Button></AnchorLink>
                </div>
              </div>
          </Parallax>
        </section>
        <section id='introduce'>
          <div style={{width: '100%', height: '1200px', backgroundColor: '#f7f7f7', textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "60px"}}>
            <p style={titleText}>Introduce</p>
            <hr color="#333333" width="10.5%" style={{marginBottom: "80px", border: "0", height: "3px"}}></hr>
            
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "1000px"}}>
              <img src={programmingImg} style={{height: '200px', marginRight: '50px'}}></img>
              <div style={{display: "flex", flexDirection: "column", alignItems: "start", textAlign: "left"}}>
                <p style={pgTitleText}>프로그래밍</p>
                <p style={pgNormalText}>웹이나 앱, 콘솔 기반의 다양한 프로그래밍 언어를 기반으로 세상에 도움이 되는 프로젝트들을 기획하고 구현합니다.</p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <p style={{color: "#aaaaaa", fontFamily: "Spoqa Han Sans", fontSize: "1em", fontWeight: "800", marginTop: "20px", marginBottom: "5px"}}>Good at...</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                      <img src={languagePythonImg} style={languageImg}></img>
                      <img src={languagePhpImg} style={languageImg}></img>
                      <img src={languageCImg} style={languageImg}></img>
                      <img src={languageJavaImg} style={languageImg}></img>
                    </div>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "15px"}}>
                    <p style={{color: "#aaaaaa", fontFamily: "Spoqa Han Sans", fontSize: "1em", fontWeight: "800", marginTop: "20px", marginBottom: "5px"}}>Studying...</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                      <img src={languageReactImg} style={languageImg}></img>
                      <img src={languageGoImg} style={languageImg}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "1000px", marginTop: "60px", marginBottom: "60px"}}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "start", textAlign: "left"}}>
                <p style={pgTitleText}>인공지능 및 데이터 분석</p>
                <p style={pgNormalText}>Python을 이용한 딥 러닝과 빅데이터 처리 방법에 대하여 배우고 있습니다. 생물학 등 과학 분야와 연계하여 더 다양한 프로젝트를 진행할 예정입니다.</p>
              </div>
              <img src={dataImg} style={{height: '200px', marginLeft: '50px'}}></img>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "1000px"}}>
              <img src={securityImg} style={{height: '200px', marginRight: '50px'}}></img>
              <div style={{display: "flex", flexDirection: "column", alignItems: "start", textAlign: "left"}}>
                <p style={pgTitleText}>해킹과 정보보안</p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
                  <p style={pgNormalText}>Web hacking, Reversing, Pwnable 등 다양한 분야를 공부하고 있습니다. 해킹 공격과 방어를 통해 취약점을 진단하고 안전한 프로그램을 만듭니다.</p>
                  <img src={graphImg} style={{marginLeft: '30px'}}></img>
                </div>
              </div>
            </div>

            <p style={{fontFamily: "Spoqa Han Sans", fontSize: "2em", fontWeight: "400", marginTop: "50px", marginBottom: "50px"}}>Awards</p>
            
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
