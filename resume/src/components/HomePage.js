import React, { Component } from 'react';
import './HomePage.css';
import NavBar from './NavBar';
import CircleResume from './CircleResume.png';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

class HomePage extends Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    AOS.init({
      duration : 750
    })
  }

  componentDidUpdate() {
    let hash = this.props.location.hash.replace('#', '');
    if (hash) {
        let node = ReactDOM.findDOMNode(this.refs[hash]);
        if (node) {
            node.scrollIntoView();
        }
    }
}
   
render() {
  return ( 
  			<div className="homepage">
          <div className="background">
          <NavBar />
          
            <div className="content">
              <div className="content__container">
                               
              <ul className="content__container__list">
                <li className="content__container__list__item1">Hello World</li>
                <li className="content__container__list__item">and Welcome!</li>
              </ul>
            </div>
          </div>
          <div className="title">
          <h1>Justin Faulkenberry</h1>
          <hr></hr>
          <h2>Full Stack Web Developer</h2>
          </div>
          </div>
          <div ref='about'>
          <div href="about" id="about" className="about" data-aos="fade-up">
            <div className="aboutHeader">A little about me...</div>
              <div className="aboutBody">
                  <div className="aboutMe">
                    <img src={CircleResume} className="PicOfMe" alt="me" />
                    <div className="bodyContent">
                      <p>Bacon ipsum dolor amet chicken picanha pastrami pork belly kielbasa landjaeger brisket capicola pork chop prosciutto pork loin corned beef boudin ham rump. Alcatra pork turducken, meatball pig pastrami sausage sirloin strip steak pork chop ground round. Tri-tip prosciutto boudin ham, hamburger drumstick corned beef flank. Ribeye leberkas prosciutto, pancetta pastrami andouille fatback capicola kevin. Rump prosciutto pork belly pig short loin flank tail. Ham jerky shank doner ground round leberkas venison pork chop drumstick chuck andouille meatloaf ham hock. Biltong swine ground round, brisket ribeye cow jerky burgdoggen corned beef.</p>
                      <p>Swine chuck capicola pork belly, pork loin corned beef tongue burgdoggen pastrami bacon spare ribs meatloaf turkey. Short loin short ribs chuck buffalo, meatball beef ribs jerky pastrami strip steak doner. Beef ribs brisket flank boudin turkey biltong picanha jerky strip steak. Buffalo porchetta drumstick, capicola rump doner ham burgdoggen pastrami shank. Rump drumstick tail landjaeger pork belly leberkas meatball tongue burgdoggen jowl bacon andouille. Leberkas flank pork chop alcatra pork loin.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="loader-box">
            <div className="loader">
                  <div className="element-animation">
                  <img src="http://i57.tinypic.com/30dighv.png" width="480" height="100" className="breaker"></img>
                  </div>
            </div>
            <ul className="labels">
              <li className="label">More Coming Soon...</li>
              <li className="label">Wandering...</li>
              <li className="label">Thrillseeking...</li>
              <li className="label">Adventuring...</li>
            </ul>
      </div>
				</div>
  );
}};

export default HomePage;