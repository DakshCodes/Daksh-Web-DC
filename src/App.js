import React from "react";
import Home from './component/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./component/Home/home.scss";
import "../src/component/Projectt/projects.scss";
import '../src/component/Header/header.scss'
import '../src/component/Skills/skill.scss'
// import '../src/component/QuotesSection/qoute.scss'
import '../src/component/Overlay/Overlay.scss'
import '../src/style/media.scss';
import '../src/component/Contact/Contact.css'
import { Toaster } from "react-hot-toast";
import { Routes, Route } from 'react-router-dom'
import SkillSection from "./component/Skills/SkillSection";
import {Projects} from '../src/component/Projectt/Projects'
import {Contact} from '../src/component/Contact/Contact'


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects /> } />
      <Route path="/skill" element={<SkillSection /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
  </>
  );
}

export default App;
