import { useEffect } from 'react';
import '../assets/Css/Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import devimg from '../assets/img/2.png'
import Office from '../assets/img/Microsoft_Office_13-16_Logo.png'
import appdev from '../assets/img/app-developmenttt.png'
import seo from '../assets/img/1740468.png'


function Services({onScroll ,refs}) {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);


  return (
    <>
    <div className="links"> 
        <ul>
          <li onClick={() => onScroll(refs.homeRef)}>HOME</li>
          <li onClick={() => onScroll(refs.servicesRef)}>SERVICES</li>
          <li onClick={() => onScroll(refs.aboutRef)}>ABOUT</li>
          <li onClick={() => onScroll(refs.portfolioRef)}>PORTFOLIO</li>
          <li onClick={() => onScroll(refs.contactRef)}>CONTACT</li>
        </ul>
    </div>
    <div className='services'>
      <div data-aos="fade-up" className='turn'>
          <p>Our Services</p>
          <h1>Turn Information <br/> <span>Into Actionable </span>Insights</h1>
      </div>
    

      <div className="servicesbox">
        <div data-aos="fade" data-aos-delay="300" className="box">
          <img src={devimg} alt="" />
          <span>Web development</span>
          <p>
            I develop modern, high-performance websites using React and PHP Laravel, focusing on clean design and seamless user experience.
          </p>



        </div>
        <div data-aos="fade" data-aos-delay="600" className="box office">
           <img src={Office} alt="" />
           <span>Microsoft Office Services</span>
          <p>I make your work more efficient and creative with Microsoft Office tools.
             I analyze data accurately in Excel, and I can create professional Word documents.</p>
        </div>
        <div data-aos="fade" data-aos-delay="800" className="box">
          <img src={appdev} alt="" />
          <span>Mobile App Development with React Native</span>
          <p>I create fast, high-performance, and user-friendly mobile apps for both iOS and Android
             using React Native and achieve maximum results with modern technologies.</p>
        </div>
        <div data-aos="fade" data-aos-delay="1100" className="box">
           <img src={seo} alt="" />
       <span>SQL / MSSQL / MySQL Development</span>
          <p>
            I design, manage, and optimize relational databases using SQL and MSSQL . 
            I ensure fast, reliable data access and build scalable solutions for complex applications.
          </p>
        </div>
      </div>
   

    
    </div>
    </>
  )
}

export default Services