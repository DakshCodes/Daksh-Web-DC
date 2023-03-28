import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../Projectt/Disney.jpg";
import projImg2 from "../Projectt/Netflix.png";
import projImg3 from "../Projectt/Hulu.jpg";
import projImg4 from "../Projectt/Imdb.jpg";
import projImg5 from "../Projectt/Tesla.png";
import projImg6 from "../Projectt/Imdb.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { animate, delay, motion } from "framer-motion";
import Header from "../Header/Header";
import { useState,useEffect } from "react";
import {PacmanLoader} from 'react-spinners';
export const Projects = () => {

  const animation = {
    h1: {
        initial: {
            y: "100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        }

    },
    button: {
        initial: {
            x: "100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        }
    },
};

const [Loding,setLoding] = useState(false)
   useEffect(()=>{
        setLoding(true);
        setTimeout(() => {
          setLoding(false);
        }, 1500);
   },[])


  const clones= [
    {
      title: "Disney-Clone",
      description: "It is Amazing Website For Movies ",
      imgUrl: projImg1,
      liveUrl:'disney-clone-d9pap0yxj-dakshsinghk2524-gmailcom.vercel.app',
      // codeurl:aak,
    },
    {
      title: "Netflix-Clone",
      description: "It is Amazing Website For Movies",
      imgUrl: projImg2,
      // liveUrl:akk,
      // codeurl:aak,
    },
    {
      title: "Hulu-Clone",
      description: "It is Amazing Website For Movies",
      imgUrl: projImg3,
      // liveUrl:akk,
      // codeurl:aak,
    },
    {
      title: "Imdb-Clone",
      description: "It is Amazing Website For Movies",
      imgUrl: projImg4,
      // liveUrl:akk,
      // codeurl:aak,
    },
    {
      title: "Tesla-Clone",
      description: "It is Tesla Automobiles Componey Clone",
      imgUrl: projImg5,
      // liveUrl:akk,
      // codeurl:aak,
    },
  ];

  return (<>
    {
      Loding ?
      <div className='loder-spin'>
       <PacmanLoader speedMultiplier={2} size={35} color='#286f6c' /> 
       </div> 
      : <section className="project" >
      <Header />
      <Container className="main-project">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <motion.h1 {...animation.h1} >Projects</motion.h1>
                <motion.p {...animation.button}>Don't be pushed around by the fears in your mind.<br/>Be led by the dreams in your heart.</motion.p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CLONES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">START-UPS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PROJECTS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="first-project-section">
                        {
                          clones.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="first-project-section"w>
                        {
                          // projects.map((project, index) => {
                          //   return (
                          //     <ProjectCard
                          //       key={index}
                          //       {...project}
                          //       />
                          //   )
                          // })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          // projects.map((project, index) => {
                          //   return (
                          //     <ProjectCard
                          //       key={index}
                          //       {...project}
                          //       />
                          //   )
                          // })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
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