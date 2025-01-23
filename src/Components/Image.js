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
import Leftinfo from './Leftinfo';
import Testimonials from './Testimonials';

export default function Image() {
  return (
    <div>
      <div className='left-info float-left width-40 primary-grid justify-end'>
        <Leftinfo logo={logo} name="Shaury Singh" desc="A engineer who is capable of developing innovative solutions to knotty problems."></Leftinfo>
        <Testimonials></Testimonials>
      </div>
      <div className='right-info float-left width-60'>
        <div className='primary-grid justify-center pos-rel info-div'>
          <h1 className='font-poppins whiten font-head font-spacing margin-top-extra primary-flex justify-start margin-left-extra'>SOFTWARE</h1>
          <h1 className='font-poppins font-head font-spacing primary-flex justify-start margin-left-extra transform-up darken'>ENGINEER</h1>
          <div className='primary-flex margin-left-extra'>
            <p className='third-font text-center width-500 font-poppins transform-up-max text-info'>Passionate about creating simple solution to complex problems combined with great user experience. Specialize in transforming ideas into beautifully crafted products.</p>
          </div>
        </div>
        <div className='primary-grid justify-center margin-left'>
          <RecentProjects head1="Recent" head2="Projects"></RecentProjects>
          <Projects pointer="https://gangaaartievents.com/" img={AartiPage} projectName="Maha Ganga Aarti Events" desc="Event Booking Website (Client Work)"></Projects>
          <Projects pointer="https://github.com/shaury-singh/investify-v2" img={Investify} projectName="Investify Stock Exchange" desc="Self Contained Stock Exchange (Concept Work)"></Projects>
        </div>
        <div className='primary-grid justify-center margin-left'>
          <RecentProjects head1="Premuim" head2="Tools"></RecentProjects>
          <div className='primary-grid padding-sml'>
            <div className='primary-flex'>
              <Tools pointer="https://react.dev/" img={ReactJS} projectName="React.JS" desc="Frontend Library"></Tools>
              <Tools pointer="https://nodejs.org/en" img={NodeJS} projectName="Node.JS" desc="Backend Framework"></Tools>
            </div>
            <div className='primary-flex'>
              <Tools pointer="https://www.figma.com/" img={Figma} projectName="Figma" desc="Web Design Usage"></Tools>
              <Tools pointer="https://www.mysql.com/" img={MySQL} projectName="MySQL" desc="SQL Based Database"></Tools>
            </div>
            <div className='primary-flex margin-bottom-extra'>
              <Tools pointer="https://www.mongodb.com/" img={MongoDB} projectName="MongoDB" desc="NoSQL Based Database"></Tools>
              <Tools pointer="https://aws.amazon.com/" img={Aws} projectName="AWS Hosting" desc="Devops"></Tools>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
