import { useState ,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Contact/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Header from "../Header/Header";
import {PacmanLoader} from 'react-spinners';

export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');

  const handle = (event) => {
    event.preventDefault();
    setButtonText("Sending....");
    setInterval(() => {
      setButtonText("Send");
    }, 4000);
  }
  
const [Loding,setLoding] = useState(false)
useEffect(()=>{
     setLoding(true);
     setTimeout(() => {
       setLoding(false);
     }, 1500);
},[])

  return (<>
    {
      Loding ?
        <div className='loder-spin'>
          <PacmanLoader speedMultiplier={2} size={35} color='#286f6c' />
        </div>
        : <section className="contact" id="connect">
          <Header />
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" placeholder="First Name" />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" placeholder="Last Name" />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email" placeholder="Email Address" />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel" placeholder="Phone No." />
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6" placeholder="Message"></textarea>
                            <button type="submit" onClick={handle}><span>{buttonText}</span></button>
                          </Col>
                        </Row>
                      </form>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
    }
  </>
  )
}