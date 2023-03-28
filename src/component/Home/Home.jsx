import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
import Logo from '../Home/logo.svg'
import dog from '../Home/dog.png'
import png from '../Home/png.svg'
import { CgMenuGridO } from 'react-icons/cg'
import { FaCross } from 'react-icons/fa'
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSkype, faHome, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../animatedletter/Animated'
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'
import ZigZag1 from '../Home/zigzag.png'
import ZigZag2 from '../Home/down.png'
import {PacmanLoader} from 'react-spinners';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', '', 'D', 'a', 'k', ' s', 'h', '', 'S', 'i', 'n', 'g', 'h', '!']
  const jobArray = ['y',
    'o',
    'u',
    '',
    'c',
    'a',
    'n',
    '',
    'c',
    'a',
    'l',
    'l',
    '',
    'm',
    'e',
    ''
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const [Loding,setLoding] = useState(false)
   useEffect(()=>{
        setLoding(true);
        setTimeout(() => {
          setLoding(false);
        }, 1500);
   },[])
  const Handle = () => {
    let menu = document.querySelector('#menu');
    let farzi = document.querySelector('#farzii');
    let one = document.querySelector('#one');
    let menubtn = document.getElementById('menu-icon');
    let crossbtn = document.getElementById('croos');
    menu.classList.toggle('active');
    farzi.classList.toggle('active');
    one.classList.toggle('active');
    menubtn.style.display = 'none';
    crossbtn.style.display = "block";
  }
  const handle2 = () => {
    let menu = document.querySelector('#menu');
    let farzi = document.querySelector('#farzii');
    let one = document.querySelector('#one');
    let menubtn = document.getElementById('menu-icon');
    let crossbtn = document.getElementById('croos');

    menu.classList.remove('active');
    farzi.classList.remove('active');
    one.classList.remove('active');
    menubtn.style.display = 'block';
    crossbtn.style.display = "none";
  }
  const animations = {
    first: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
    {
      Loding ?
      <div className='loder-spin'>
       <PacmanLoader speedMultiplier={2} size={35} color='#286f6c' /> 
       </div> 
      :<div className="page" >
      <div className='farzi' id='farzii'></div>
      <div class="wrapper" id='menu'>
        <ul>
          <li><a href="/"><span>01</span>Home</a></li>
          <li><a href="/projects"><span>02</span>Work</a></li>
          <li><a href="/skill"><span>03</span>skill</a></li>
          <li><a href="/contact"><span>04</span>Contact</a></li>
        </ul>
        <div className="img"><img src='' alt="" /></div>
      </div>
      <div className='one' id='one'></div>
      <div class="wrapper" id='menu'>
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
      <div className="head">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="logo">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.76 46.38"><defs>
          <style></style></defs><title>dsc</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="28.39 35.08 28.39 35.52 28 35.75 27.61 35.52 27.61 35.08 28 34.85 28.39 35.08"/><polygon class="cls-1" points="28.39 34.63 28.39 35.08 28 34.85 28.39 34.63"/><polygon class="cls-1" points="28.39 25.34 28.39 34.63 28 34.85 27.61 34.63 27.61 25.34 28 25.12 28.39 25.34"/><polygon class="cls-1" points="28.39 24.89 28.39 25.34 28 25.12 28.39 24.89"/><polygon class="cls-1" points="28.39 24.45 28.39 24.89 28 25.12 27.61 24.9 27.61 24.45 28 24.22 28.39 24.45"/><polygon class="cls-1" points="28.39 24 28.39 24.45 28 24.22 28.39 24"/><polygon class="cls-1" points="28.39 14.71 28.39 24 28 24.22 27.61 24 27.61 14.71 28 14.49 28.39 14.71"/><polygon class="cls-1" points="28.39 14.27 28.39 14.71 28 14.49 28.39 14.27"/><polygon class="cls-1" points="28.39 13.82 28.39 14.27 28 14.49 27.61 14.27 27.61 13.82 28 13.6 28.39 13.82"/><polygon class="cls-1" points="27.61 35.52 28 35.75 27.61 35.97 27.61 35.52"/><polygon class="cls-1" points="27.61 13.38 28 13.6 27.61 13.82 27.61 13.38"/><polygon class="cls-1" points="28 14.49 27.61 14.71 27.61 14.27 28 14.49"/><polygon class="cls-1" points="28 24.22 27.61 24.45 27.61 24 28 24.22"/><polygon class="cls-1" points="28 25.12 27.61 25.34 27.61 24.9 28 25.12"/><polygon class="cls-1" points="28 34.85 27.61 35.08 27.61 34.63 28 34.85"/><polygon class="cls-1" points="27.61 35.52 27.61 35.97 19.57 40.61 19.18 40.4 19.18 39.94 27.22 35.3 27.61 35.52"/><polygon class="cls-1" points="27.61 35.08 27.61 35.52 27.22 35.3 27.61 35.08"/><polygon class="cls-1" points="27.61 34.63 27.61 35.08 27.22 35.3 19.18 30.65 19.18 30.21 19.57 29.98 27.61 34.63"/><polygon class="cls-1" points="27.61 24.9 27.61 25.34 19.57 29.98 19.18 29.77 19.18 29.31 27.22 24.67 27.61 24.9"/><polygon class="cls-1" points="27.61 24.45 27.61 24.9 27.22 24.67 27.61 24.45"/><polygon class="cls-1" points="27.61 24 27.61 24.45 27.22 24.67 19.18 20.04 19.18 19.58 19.57 19.36 27.61 24"/><polygon class="cls-1" points="27.61 14.27 27.61 14.71 19.57 19.36 19.18 19.14 19.18 18.69 27.22 14.05 27.61 14.27"/><polygon class="cls-1" points="27.61 13.82 27.61 14.27 27.22 14.05 27.61 13.82"/><polygon class="cls-1" points="27.61 13.38 27.61 13.82 27.22 14.05 19.18 9.41 19.18 8.95 19.57 8.73 27.61 13.38"/><polygon class="cls-1" points="19.57 19.36 19.18 19.58 19.18 19.14 19.57 19.36"/><polygon class="cls-1" points="19.57 8.73 19.18 8.95 19.18 8.51 19.57 8.73"/><polygon class="cls-1" points="19.57 29.98 19.18 30.21 19.18 29.77 19.57 29.98"/><polygon class="cls-1" points="19.57 40.61 19.18 40.84 19.18 40.4 19.57 40.61"/><polygon class="cls-1" points="19.18 40.4 19.18 40.84 18.79 41.06 18.41 40.84 18.41 40.39 18.79 40.16 19.18 40.4"/><polygon class="cls-1" points="19.18 39.94 19.18 40.4 18.79 40.16 19.18 39.94"/><polygon class="cls-1" points="19.18 30.65 19.18 39.94 18.79 40.16 18.41 39.95 18.41 30.66 18.79 30.43 19.18 30.65"/><polygon class="cls-1" points="19.18 30.21 19.18 30.65 18.79 30.43 19.18 30.21"/><polygon class="cls-1" points="19.18 29.77 19.18 30.21 18.79 30.43 18.41 30.21 18.41 29.76 18.79 29.54 19.18 29.77"/><polygon class="cls-1" points="19.18 29.31 19.18 29.77 18.79 29.54 19.18 29.31"/><polygon class="cls-1" points="19.18 20.04 19.18 29.31 18.79 29.54 18.41 29.32 18.41 20.03 18.79 19.8 19.18 20.04"/><polygon class="cls-1" points="19.18 19.58 19.18 20.04 18.79 19.8 19.18 19.58"/><polygon class="cls-1" points="19.18 19.14 19.18 19.58 18.79 19.8 18.41 19.59 18.41 19.14 18.79 18.91 19.18 19.14"/><polygon class="cls-1" points="19.18 18.69 19.18 19.14 18.79 18.91 19.18 18.69"/><polygon class="cls-1" points="19.18 9.41 19.18 18.69 18.79 18.91 18.41 18.69 18.41 9.4 18.79 9.18 19.18 9.41"/><polygon class="cls-1" points="19.18 8.95 19.18 9.41 18.79 9.18 19.18 8.95"/><polygon class="cls-1" points="19.18 8.51 19.18 8.95 18.79 9.18 18.41 8.96 18.41 8.51 18.79 8.29 19.18 8.51"/><polygon class="cls-1" points="18.41 30.21 18.79 30.43 18.41 30.66 18.41 30.21"/><polygon class="cls-1" points="18.41 40.84 18.79 41.06 18.41 41.29 18.41 40.84"/><polygon class="cls-1" points="18.79 8.29 18.41 8.51 18.41 8.06 18.79 8.29"/><polygon class="cls-1" points="18.79 18.91 18.41 19.14 18.41 18.69 18.79 18.91"/><polygon class="cls-1" points="18.79 40.16 18.41 40.39 18.41 39.95 18.79 40.16"/><polygon class="cls-1" points="18.79 29.54 18.41 29.76 18.41 29.32 18.79 29.54"/><polygon class="cls-1" points="18.79 19.8 18.41 20.03 18.41 19.59 18.79 19.8"/><polygon class="cls-1" points="18.79 9.18 18.41 9.4 18.41 8.96 18.79 9.18"/><polygon class="cls-1" points="18.41 40.84 18.41 41.29 10.37 45.93 9.98 45.7 9.98 45.25 18.02 40.61 18.41 40.84"/><polygon class="cls-1" points="18.41 40.39 18.41 40.84 18.02 40.61 18.41 40.39"/><polygon class="cls-1" points="18.41 39.95 18.41 40.39 18.02 40.61 9.98 35.97 9.98 35.52 10.37 35.3 18.41 39.95"/><polygon class="cls-1" points="18.41 30.21 18.41 30.66 10.37 35.3 9.98 35.08 9.98 34.63 18.02 29.98 18.41 30.21"/><polygon class="cls-1" points="18.41 29.76 18.41 30.21 18.02 29.98 18.41 29.76"/><polygon class="cls-1" points="18.41 19.14 18.41 19.59 18.02 19.36 18.41 19.14"/><polygon class="cls-1" points="18.41 18.69 18.41 19.14 18.02 19.36 9.98 14.72 9.98 14.27 10.37 14.04 18.41 18.69"/><polygon class="cls-1" points="18.41 8.96 18.41 9.4 10.37 14.04 9.98 13.82 9.98 13.38 18.02 8.73 18.41 8.96"/><polygon class="cls-1" points="18.41 8.51 18.41 8.96 18.02 8.73 18.41 8.51"/><polygon class="cls-1" points="18.41 8.06 18.41 8.51 18.02 8.73 9.98 4.09 9.98 3.65 10.37 3.42 18.41 8.06"/><polygon class="cls-1" points="9.98 45.7 10.37 45.93 9.98 46.15 9.98 45.7"/><polygon class="cls-1" points="9.98 3.19 10.37 3.42 9.98 3.65 9.98 3.19"/><polygon class="cls-1" points="10.37 14.04 9.98 14.27 9.98 13.82 10.37 14.04"/><polygon class="cls-1" points="10.37 35.3 9.98 35.52 9.98 35.08 10.37 35.3"/><polygon class="cls-1" points="9.98 45.7 9.98 46.15 9.59 46.38 9.2 46.15 9.2 45.7 9.59 45.48 9.98 45.7"/><polygon class="cls-1" points="9.98 45.25 9.98 45.7 9.59 45.48 9.98 45.25"/><polygon class="cls-1" points="9.98 35.97 9.98 45.25 9.59 45.48 9.2 45.25 9.2 35.97 9.59 35.75 9.98 35.97"/><polygon class="cls-1" points="9.98 35.52 9.98 35.97 9.59 35.75 9.98 35.52"/><polygon class="cls-1" points="9.98 35.08 9.98 35.52 9.59 35.75 9.2 35.52 9.2 35.08 9.58 34.85 9.98 35.08"/><polygon class="cls-1" points="9.98 34.63 9.98 35.08 9.58 34.85 9.98 34.63"/><polygon class="cls-1" points="9.98 14.27 9.98 14.72 9.58 14.49 9.98 14.27"/><polygon class="cls-1" points="9.98 13.82 9.98 14.27 9.58 14.49 9.2 14.27 9.2 13.82 9.59 13.6 9.98 13.82"/><polygon class="cls-1" points="9.98 13.38 9.98 13.82 9.59 13.6 9.98 13.38"/><polygon class="cls-1" points="9.98 4.09 9.98 13.38 9.59 13.6 9.2 13.38 9.2 4.09 9.59 3.87 9.98 4.09"/><polygon class="cls-1" points="9.98 3.65 9.98 4.09 9.59 3.87 9.98 3.65"/><polygon class="cls-1" points="9.98 3.19 9.98 3.65 9.59 3.87 9.2 3.65 9.2 3.19 9.59 2.97 9.98 3.19"/><polygon class="cls-1" points="9.2 35.52 9.59 35.75 9.2 35.97 9.2 35.52"/><polygon class="cls-1" points="9.2 45.25 9.59 45.48 9.2 45.7 9.2 45.25"/><polygon class="cls-1" points="9.59 3.87 9.2 4.09 9.2 3.65 9.59 3.87"/><polygon class="cls-1" points="9.59 13.6 9.2 13.82 9.2 13.38 9.59 13.6"/><polygon class="cls-1" points="9.58 34.85 9.2 35.08 9.2 34.63 9.58 34.85"/><polygon class="cls-1" points="9.58 14.49 9.2 14.71 9.2 14.27 9.58 14.49"/><polygon class="cls-1" points="9.2 45.7 9.2 46.15 8.82 45.93 9.2 45.7"/><polygon class="cls-1" points="9.2 45.25 9.2 45.7 8.82 45.93 0.78 41.29 0.78 40.84 1.16 40.61 9.2 45.25"/><polygon class="cls-1" points="9.2 35.52 9.2 35.97 1.16 40.61 0.78 40.39 0.78 39.94 8.82 35.3 9.2 35.52"/><polygon class="cls-1" points="9.2 35.08 9.2 35.52 8.82 35.3 9.2 35.08"/><polygon class="cls-1" points="9.2 34.63 9.2 35.08 8.82 35.3 0.78 30.66 0.78 30.21 1.15 29.98 9.2 34.63"/><polygon class="cls-1" points="9.2 14.27 9.2 14.71 1.15 19.36 0.78 19.14 0.78 18.69 8.82 14.05 9.2 14.27"/><polygon class="cls-1" points="9.2 13.82 9.2 14.27 8.82 14.05 9.2 13.82"/><polygon class="cls-1" points="9.2 13.38 9.2 13.82 8.82 14.05 0.78 9.41 0.78 8.96 1.16 8.73 9.2 13.38"/><polygon class="cls-1" points="9.2 3.65 9.2 4.09 1.16 8.73 0.78 8.51 0.78 8.06 8.82 3.42 9.2 3.65"/><polygon class="cls-1" points="9.2 3.19 9.2 3.65 8.82 3.42 9.2 3.19"/><polygon class="cls-1" points="0.78 8.51 1.16 8.73 0.78 8.96 0.78 8.51"/><polygon class="cls-1" points="0.78 40.39 1.16 40.61 0.78 40.84 0.78 40.39"/><polygon class="cls-1" points="1.15 29.98 0.78 30.21 0.78 29.77 1.15 29.98"/><polygon class="cls-1" points="1.15 19.36 0.78 19.58 0.78 19.14 1.15 19.36"/><polygon class="cls-1" points="0.78 40.84 0.78 41.29 0.39 41.06 0.78 40.84"/><polygon class="cls-1" points="0.78 40.39 0.78 40.84 0.39 41.06 0 40.84 0 40.39 0.39 40.16 0.78 40.39"/><polygon class="cls-1" points="0.78 39.94 0.78 40.39 0.39 40.16 0.78 39.94"/><polygon class="cls-1" points="0.78 30.66 0.78 39.94 0.39 40.16 0 39.94 0 30.66 0.39 30.43 0.78 30.66"/><polygon class="cls-1" points="0.78 30.21 0.78 30.66 0.39 30.43 0.78 30.21"/><polygon class="cls-1" points="0.78 29.77 0.78 30.21 0.39 30.43 0 30.21 0 29.77 0.39 29.54 0.78 29.77"/><polygon class="cls-1" points="0.78 19.14 0.78 19.58 0.39 19.8 0 19.58 0 19.14 0.39 18.91 0.78 19.14"/><polygon class="cls-1" points="0.78 18.69 0.78 19.14 0.39 18.91 0.78 18.69"/><polygon class="cls-1" points="0.78 9.41 0.78 18.69 0.39 18.91 0 18.69 0 9.41 0.39 9.18 0.78 9.41"/><polygon class="cls-1" points="0.78 8.96 0.78 9.41 0.39 9.18 0.78 8.96"/><polygon class="cls-1" points="0.78 8.51 0.78 8.96 0.39 9.18 0 8.96 0 8.51 0.39 8.29 0.78 8.51"/><polygon class="cls-1" points="0.78 8.06 0.78 8.51 0.39 8.29 0.78 8.06"/><polygon class="cls-1" points="0 30.21 0.39 30.43 0 30.66 0 30.21"/><polygon class="cls-1" points="0.39 9.18 0 9.41 0 8.96 0.39 9.18"/><polygon class="cls-1" points="0.39 18.91 0 19.14 0 18.69 0.39 18.91"/><polygon class="cls-1" points="0.39 40.16 0 40.39 0 39.94 0.39 40.16"/><polygon class="cls-1" points="59.2 38.24 59.2 38.82 58.7 39.11 58.2 38.82 58.2 38.25 58.71 37.95 59.2 38.24"/><polygon class="cls-1" points="59.2 37.67 59.2 38.24 58.71 37.95 59.2 37.67"/><polygon class="cls-1" points="59.2 25.68 59.2 37.67 58.71 37.95 58.2 37.66 58.2 25.67 58.7 25.39 59.2 25.68"/><polygon class="cls-1" points="59.2 25.1 59.2 25.68 58.7 25.39 59.2 25.1"/><polygon class="cls-1" points="59.2 24.52 59.2 25.1 58.7 25.39 58.2 25.1 58.2 24.53 58.71 24.23 59.2 24.52"/><polygon class="cls-1" points="59.2 10.81 59.2 11.39 58.71 11.67 58.2 11.38 58.2 10.81 58.7 10.52 59.2 10.81"/><polygon class="cls-1" points="58.71 11.67 58.2 11.97 58.2 11.38 58.71 11.67"/><polygon class="cls-1" points="58.71 24.23 58.2 24.53 58.2 23.94 58.71 24.23"/><polygon class="cls-1" points="58.71 37.95 58.2 38.25 58.2 37.66 58.71 37.95"/><polygon class="cls-1" points="58.7 10.52 58.2 10.81 58.2 10.23 58.7 10.52"/><polygon class="cls-1" points="58.7 25.39 58.2 25.67 58.2 25.1 58.7 25.39"/><polygon class="cls-1" points="58.7 39.11 58.2 39.39 58.2 38.82 58.7 39.11"/><polygon class="cls-1" points="58.2 38.82 58.2 39.39 47.82 45.39 47.32 45.1 47.32 44.53 57.7 38.53 58.2 38.82"/><polygon class="cls-1" points="58.2 38.25 58.2 38.82 57.7 38.53 58.2 38.25"/><polygon class="cls-1" points="58.2 37.66 58.2 38.25 57.7 38.53 47.32 32.54 47.32 31.96 47.82 31.67 58.2 37.66"/><polygon class="cls-1" points="58.2 25.1 58.2 25.67 47.82 31.67 47.32 31.38 47.32 30.81 57.7 24.81 58.2 25.1"/><polygon class="cls-1" points="58.2 24.53 58.2 25.1 57.7 24.81 58.2 24.53"/><polygon class="cls-1" points="58.2 23.94 58.2 24.53 57.7 24.81 47.32 18.82 47.32 18.25 47.83 17.95 58.2 23.94"/><polygon class="cls-1" points="58.2 11.38 58.2 11.97 47.83 17.95 47.32 17.66 47.32 17.09 57.7 11.09 58.2 11.38"/><polygon class="cls-1" points="58.2 10.81 58.2 11.38 57.7 11.09 58.2 10.81"/><polygon class="cls-1" points="58.2 10.23 58.2 10.81 57.7 11.09 47.32 5.1 47.32 4.53 47.82 4.24 58.2 10.23"/><polygon class="cls-1" points="47.83 17.95 47.32 18.25 47.32 17.66 47.83 17.95"/><polygon class="cls-1" points="47.82 4.24 47.32 4.53 47.32 3.95 47.82 4.24"/><polygon class="cls-1" points="47.82 31.67 47.32 31.96 47.32 31.38 47.82 31.67"/><polygon class="cls-1" points="47.82 45.39 47.32 45.68 47.32 45.1 47.82 45.39"/><polygon class="cls-1" points="47.32 45.1 47.32 45.68 46.82 45.97 46.32 45.68 46.32 45.1 46.82 44.81 47.32 45.1"/><polygon class="cls-1" points="47.32 44.53 47.32 45.1 46.82 44.81 47.32 44.53"/><polygon class="cls-1" points="47.32 32.54 47.32 44.53 46.82 44.81 46.32 44.52 46.32 32.53 46.82 32.25 47.32 32.54"/><polygon class="cls-1" points="47.32 31.96 47.32 32.54 46.82 32.25 47.32 31.96"/><polygon class="cls-1" points="47.32 31.38 47.32 31.96 46.82 32.25 46.32 31.96 46.32 31.38 46.82 31.09 47.32 31.38"/><polygon class="cls-1" points="47.32 30.81 47.32 31.38 46.82 31.09 47.32 30.81"/><polygon class="cls-1" points="47.32 18.82 47.32 30.81 46.82 31.09 46.32 30.8 46.32 18.82 46.82 18.53 47.32 18.82"/><polygon class="cls-1" points="47.32 18.25 47.32 18.82 46.82 18.53 47.32 18.25"/><polygon class="cls-1" points="47.32 17.66 47.32 18.25 46.82 18.53 46.32 18.24 46.32 17.67 46.82 17.37 47.32 17.66"/><polygon class="cls-1" points="47.32 17.09 47.32 17.66 46.82 17.37 47.32 17.09"/><polygon class="cls-1" points="47.32 5.1 47.32 17.09 46.82 17.37 46.32 17.08 46.32 5.1 46.82 4.81 47.32 5.1"/><polygon class="cls-1" points="47.32 4.53 47.32 5.1 46.82 4.81 47.32 4.53"/><polygon class="cls-1" points="47.32 3.95 47.32 4.53 46.82 4.81 46.32 4.52 46.32 3.95 46.82 3.66 47.32 3.95"/><polygon class="cls-1" points="46.82 44.81 46.32 45.1 46.32 44.52 46.82 44.81"/><polygon class="cls-1" points="46.82 31.09 46.32 31.38 46.32 30.8 46.82 31.09"/><polygon class="cls-1" points="46.82 18.53 46.32 18.82 46.32 18.24 46.82 18.53"/><polygon class="cls-1" points="46.82 17.37 46.32 17.67 46.32 17.08 46.82 17.37"/><polygon class="cls-1" points="46.82 4.81 46.32 5.1 46.32 4.52 46.82 4.81"/><polygon class="cls-1" points="46.82 32.25 46.32 32.53 46.32 31.96 46.82 32.25"/><polygon class="cls-1" points="46.32 45.1 46.32 45.68 45.82 45.39 46.32 45.1"/><polygon class="cls-1" points="46.32 44.52 46.32 45.1 45.82 45.39 35.44 39.4 35.44 38.82 35.94 38.53 46.32 44.52"/><polygon class="cls-1" points="46.32 31.96 46.32 32.53 35.94 38.53 35.44 38.24 35.44 37.67 45.82 31.67 46.32 31.96"/><polygon class="cls-1" points="46.32 31.38 46.32 31.96 45.82 31.67 46.32 31.38"/><polygon class="cls-1" points="46.32 30.8 46.32 31.38 45.82 31.67 35.44 25.68 35.44 25.11 35.95 24.81 46.32 30.8"/><polygon class="cls-1" points="46.32 18.24 46.32 18.82 35.95 24.81 35.44 24.52 35.44 23.95 45.82 17.95 46.32 18.24"/><polygon class="cls-1" points="46.32 17.67 46.32 18.24 45.82 17.95 46.32 17.67"/><polygon class="cls-1" points="46.32 17.08 46.32 17.67 45.82 17.95 35.44 11.96 35.44 11.39 35.95 11.09 46.32 17.08"/><polygon class="cls-1" points="46.32 4.52 46.32 5.1 35.95 11.09 35.44 10.8 35.44 10.23 45.82 4.23 46.32 4.52"/><polygon class="cls-1" points="46.32 3.95 46.32 4.52 45.82 4.23 46.32 3.95"/><polygon class="cls-1" points="35.95 11.09 35.44 11.39 35.44 10.8 35.95 11.09"/><polygon class="cls-1" points="35.95 24.81 35.44 25.11 35.44 24.52 35.95 24.81"/><polygon class="cls-1" points="35.94 38.53 35.44 38.82 35.44 38.24 35.94 38.53"/><polygon class="cls-1" points="35.44 38.82 35.44 39.4 34.93 39.11 35.44 38.82"/><polygon class="cls-1" points="35.44 38.24 35.44 38.82 34.93 39.11 34.44 38.82 34.44 38.24 34.94 37.95 35.44 38.24"/><polygon class="cls-1" points="35.44 37.67 35.44 38.24 34.94 37.95 35.44 37.67"/><polygon class="cls-1" points="35.44 25.11 35.44 25.68 34.94 25.39 35.44 25.11"/><polygon class="cls-1" points="35.44 24.52 35.44 25.11 34.94 25.39 34.44 25.1 34.44 24.52 34.94 24.23 35.44 24.52"/><polygon class="cls-1" points="35.44 23.95 35.44 24.52 34.94 24.23 35.44 23.95"/><polygon class="cls-1" points="35.44 11.96 35.44 23.95 34.94 24.23 34.44 23.94 34.44 11.96 34.94 11.67 35.44 11.96"/><polygon class="cls-1" points="35.44 11.39 35.44 11.96 34.94 11.67 35.44 11.39"/><polygon class="cls-1" points="35.44 10.8 35.44 11.39 34.94 11.67 34.44 11.38 34.44 10.8 34.94 10.51 35.44 10.8"/><polygon class="cls-1" points="35.44 10.23 35.44 10.8 34.94 10.51 35.44 10.23"/><polygon class="cls-1" points="34.94 24.23 34.44 24.52 34.44 23.94 34.94 24.23"/><polygon class="cls-1" points="34.94 11.67 34.44 11.96 34.44 11.38 34.94 11.67"/><polygon class="cls-2" points="67.76 0 67.76 0.57 67.26 0.28 67.76 0"/></g></g></svg>
          
        </motion.div>
        <div className='menu-btn'>
          <CgMenuGridO id='menu-icon' onClick={Handle} />
          <FaCross id='croos' className='cross-btn' onClick={handle2} />
        </div>
      </div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <p className='animtext-text1'><AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /></p>
            <span className='text-2'>
               <Typewriter
              options={{
                strings: ['Web Developer', 'Java Coder','App Developer'],
                autoStart: true,
                loop: true,
              }}
              />
              </span>
          </h1>
          {/* <div className='text3'>
            <p className='about-text3'>i'm a front-end developer,java programmer</p>
            <p className='about-text3'> & AI/Ml enthusiast</p>
          </div> */}
          <div className="png">
            <img src={png} alt="" />
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="link-icons">
          <a href="#"><FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          /></a>
          <a className='github' href="">
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            /></a>
          <a className='insta' href=""> <FontAwesomeIcon
            icon={faInstagram}
            color="#4d4d4e"
            className="anchor-icon"
          /></a>
          <a className='twitter' href=""> <FontAwesomeIcon
            icon={faTwitter}
            color="#4d4d4e"
            className="anchor-icon"
          /></a>
          <img className='zigzag1' src={ZigZag1} alt="" />
          <img className='zigzag2' src={ZigZag1} alt="" />
        </div>
      </div>
    </div>
    }
    
    </>
  )
}

export default Home
