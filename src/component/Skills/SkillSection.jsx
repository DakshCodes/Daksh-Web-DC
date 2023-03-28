import React from 'react'
import { useState,useEffect } from 'react';
import Header from '../Header/Header';
import img0 from '../Skills/html.png'
import img1 from '../Skills/apk.png'
import img2 from '../Skills/css-3.png'
import img3 from '../Skills/data.png'
import img4 from '../Skills/database.png'
import img5 from '../Skills/java.png'
import img6 from '../Skills/js.png'
import img7 from '../Skills/oops.png'
import img8 from '../Skills/structure.png'
import img9 from '../Skills/tailwind.webp'
import img10 from '../Skills/redux.jpeg'
import img11 from '../Skills/mysql.png'
import img12 from '../Skills/django.png'
import {PacmanLoader} from 'react-spinners';
const SkillSection = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
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
      :<div className='skill-section'>
        <Header />
        <div className='heading-skill'><h1>My Skills</h1></div>
        <div className="contain">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onMouseOver={() => toggleTab(1)}
                >
                    Frontend
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onMouseOver={() => toggleTab(2)}
                >
                    Backend
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onMouseOver={() => toggleTab(3)}
                >
                    Java
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onMouseOver={() => toggleTab(4)}
                >
                    App-Dev
                </button>
            </div>

            <div className="content-tabs">
                {/* Frontend */}
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <div className="skill-icons-1">
                        <img src={img0} alt="" />
                        <img src={img2} alt="" />
                        <img src={img6} alt="" />
                        <img src={img8} alt="" />
                        <img src={img9} alt="" />
                    </div>
                    <div className="bars">
                        <div className="bars-box">
                            <h3>HTML</h3>
                            <span>95%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar html-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>CSS</h3>
                            <span>95%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar css-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>JAVASCRIPT</h3>
                            <span>80%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar javascript-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>REACT</h3>
                            <span>90%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar react-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>TAILWIND-CSS</h3>
                            <span>80%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar tail-bar"></div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <div className="skill-icons-4">
                        <img src={img10} alt="" />
                        <img src={img4} alt="" />
                        <img src={img11} alt="" />
                        <img src={img12} alt="" />
                    </div>
                    <div className="bars">
                        <div className="bars-box">
                            <h3>REDUX-TOOLKIT</h3>
                            <span>50%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar oops-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>FIREBASE</h3>
                            <span>50%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar dsa-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>MYSQL</h3>
                            <span>20%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar mysql-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>DJANGO</h3>
                            <span>29%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar django-bar"></div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <div className="skill-icons-1">
                        <img src={img7} alt="" />
                        <img src={img3} alt="" />
                        {/* <img src={img5} alt="" /> */}
                        {/* <img src={img8} alt="" /> */}
                    </div>
                    <div className="bars">
                        <div className="bars-box">
                            <h3>OOPS</h3>
                            <span>50%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar oops-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>DSA</h3>
                            <span>50%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar dsa-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3 style={{ color: "black", fontWeight: 100 }}>LEET CODE</h3>
                            <span style={{ color: "black", fontWeight: 100 }}>Questions 29</span>
                            {/* <div className="light-bar"></div> */}
                            {/* <div className="percent-bar kotlin-bar"></div> */}
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}>
                    <div className="skill-icons-4">
                        <img src={img9} alt="" />
                        <img src={img6} alt="" />
                        <img src={img5} alt="" />
                        {/* <img src={img8} alt="" /> */}
                    </div>
                    <div className="bars">
                        <div className="bars-box">
                            <h3>NativeWind</h3>
                            <span>80%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar wind-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>JS</h3>
                            <span>80%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar javascript-bar"></div>
                        </div>
                        <div className="bars-box">
                            <h3>Java-Kotlin</h3>
                            <span>40%</span>
                            <div className="light-bar"></div>
                            <div className="percent-bar kotlin-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    </>
    );
}


export default SkillSection
