import { motion } from 'framer-motion';
import Logo from '../Home/logo.svg'
import { CgMenuGridO } from 'react-icons/cg'
import { GiCrossMark } from 'react-icons/gi'


export default function Header() {
  

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   }

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
 
  return (
    <nav >
      <NavContent />
    </nav>

  );
}

const NavContent = () => {
  const Handle = () => {
    let menu = document.querySelector('#menu');
    let farzi = document.querySelector('#farzii');
    let one = document.querySelector('#one');
    let menubtn=document.getElementById('menu-icon');
    let crossbtn=document.getElementById('croos');
    menu.classList.toggle('active');
    farzi.classList.toggle('active');
    one.classList.toggle('active');
    menubtn.style.display='none';
    crossbtn.style.display="block";
  }
  const handle2=()=>{
    let menu = document.querySelector('#menu');
    let farzi = document.querySelector('#farzii');
    let one = document.querySelector('#one');
    let menubtn=document.getElementById('menu-icon');
    let crossbtn=document.getElementById('croos');

    menu.classList.remove('active');
    farzi.classList.remove('active');
    one.classList.remove('active');
    menubtn.style.display='block';
    crossbtn.style.display="none";
  }
 
  return(
    <div className="head">
    <motion.div
    initial={{scale:0}} 
    animate={{rotate:360,scale:1}} 
     transition={{type:"spring",
     stiffness:260,
     damping:20,
    }} 
    className="logo">
     <img src={Logo} alt="" />
    </motion.div>
    <div  className='menu-btn'>
     <a href="/"><span>HOME</span></a>
    </div>
  </div>
)}