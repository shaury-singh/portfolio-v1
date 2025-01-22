import React from 'react'
import logo from "../Images/shaury.jpeg";
import AartiPage from "../Images/AartiPage.png";
import Investify from "../Images/Investify.png"
import RecentProjects from './RecentProjects';
import Projects from './Projects';
import ReactJS from "../Images/React JS.png";
import Tools from './Tools';
import NodeJS from "../Images/nodeJS.png";
import Figma from "../Images/Figma.png";
import MySQL from "../Images/MySQL.png";
import MongoDB from "../Images/MongoDB.png";
import Aws from "../Images/aws.png";

export default function Image() {
  return (
    <div>
      <div className='left-info float-left width-40 primary-flex justify-end'>
        <div className='bg-white padding-main margin-top-extra border-10 primary-grid justify-center width-min'>
          <img src={logo} alt='' className='height-main border-10'></img>
          <h1 className='primary-flex justify-center font-poppins font-main margin-t-sml'><b>Shaury Singh</b></h1>
          <p className='text-center margin-t-sml font-poppins darken-mix'><b>A engineer who is capable of developing innovative solutions to knotty problems.</b></p>
        </div>
      </div>
      <div className='right-info float-left width-60 '>
        <div className='primary-grid justify-center pos-rel info-div'>
          <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start margin-left-extra'>SOFTWARE</h1>
          <h1 className='font-poppins font-head font-spacing primary-flex justify-start margin-left-extra transform-up darken'>ENGINEER</h1>
          <div className='primary-flex margin-left-extra'>
            <p className='third-font text-center width-500 font-poppins transform-up-max text-info'>Passionate about creating simple solution to complex problems combined with great user experience. Specialize in transforming ideas into beautifully crafted products.</p>
          </div>
        </div>
        <div className='primary-grid justify-center margin-left'>
          <RecentProjects head1="Recent" head2="Projects"></RecentProjects>
          <Projects img={AartiPage} projectName="Maha Ganga Aarti Events" desc="Event Booking Website"></Projects>
          <Projects img={Investify} projectName="Investify Stock Exchange" desc="Self Contained Stock Exchange"></Projects>
        </div>
        <div className='primary-grid justify-center margin-left'>
          <RecentProjects head1="Premuim" head2="Tools"></RecentProjects>
          <div className='primary-grid padding-sml'>
            <div className='primary-flex'>
              <Tools img={ReactJS} projectName="React.JS" desc="Frontend Library"></Tools>
              <Tools img={NodeJS} projectName="Node.JS" desc="Backend Framework"></Tools>
            </div>
            <div className='primary-flex'>
              <Tools img={Figma} projectName="Figma" desc="Web Design Usage"></Tools>
              <Tools img={MySQL} projectName="MySQL" desc="SQL Based Database"></Tools>
            </div>
            <div className='primary-flex'>
              <Tools img={MongoDB} projectName="MongoDB" desc="NoSQL Based Database"></Tools>
              <Tools img={Aws} projectName="AWS Hosting" desc="Devops"></Tools>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
