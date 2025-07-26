import {Link} from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Header from './Header'
import './Home.css';

const Home = () => {
  return (
    <div className='MainContainer'>
      <Header/>
      <div className="homeContainer">
        <img 
          src="https://res.cloudinary.com/ddeubkjvk/image/upload/v1753518733/shubham_cg7svo.jpg"
          alt="profileImage" 
          className="profileImage"
        />
        <div className="profileContent">
        <h1 className="heading">Hey, I'm Shubham Trivedi</h1>
        <p className="description">
          I'm a passionate MERN Stack Developer with over 600 hours of hands-on coding experience, having successfully built and deployed 24 full-stack web applications. I specialize in developing responsive, scalable, and user-centric applications using MongoDB, Express.js, React.js, and Node.js.
          <br /><br />
          I’m proficient in creating and integrating RESTful APIs, implementing secure authentication using JWT, and following Git-based workflows. I focus heavily on performance optimization, clean code practices, and delivering seamless user experiences.
        </p>
        <div className='achieveBoxes'>
            <div className='box'>
               <h1>24+</h1>
               <h3>Rigourous Assignment and Projects.</h3>
            </div>
            <hr/>
            <div className='box'>
               <h1>600+</h1>
               <h3>Hours of Coding</h3>
            </div>   
        </div>
        <div className='link'>
            <p>
              If you're interested in my profile and would like to hire me, please click the button below.
            </p>
            <Link to="/contact">
              <button type="button" className="button">Hire Me</button>
            </Link>
        </div>
        
        
        </div>
      </div>
      <div className='skillContainer'>
         <h1 className='skillHeading'>Technical Skills</h1>
         <div className="skillsObtained">
            <div className='skill'>
              <FaHtml5 className="htmlIcon"/>
              <p>HTML</p>
            </div>
            <div className='skill'>
              <IoLogoCss3 className="cssIcon"/>
              <p>CSS</p>
            </div>
            <div className='skill'>
              <FaPython className="pythonIcon"/>
              <p>Python</p>
            </div>
            <div className='skill'>
              <TbBrandJavascript className="htmlIcon"/>
              <p>Javascript</p>
            </div>
            <div className='skill'>
              <SiSqlite className="pythonIcon"/>
              <p>SQLite</p>
            </div>
            <div className='skill'>
              <FaReact className="pythonIcon"/>
              <p>React JS</p>
            </div>
            <div className='skill'>
              <FaNode className="nodeIcon"/>
              <p>Node JS</p>
            </div>
            <div className='skill'>
              <FaBootstrap className="bootIcon"/>
              <p>HTML</p>
            </div>
            <div className='skill'>
              <FaGitAlt className="gitIcon"/>
              <p>Git</p>
            </div>
         </div>
      </div>
      
      <footer>
          <p>&#169; 2025 Shubham_Portfolio. All Rights Reserved.</p>
      </footer>
    </div>


  );
};

export default Home;
