import '../assets/Css/Awards.css'
import LogosCarousel from './LogosCarousel'
import cisko from '../assets/img/carousel/png-transparent-cisco-systems-logo-united-states-business-computer-network-research-blue-computer-network-company-thumbnail.png'
import garage from '../assets/img/carousel/download.png'
import Aztu from '../assets/img/aztu.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Awards = () =>{
    return(
       <div className="awards">
               <div className="leftbox">
               <div className='turn'>
                    <p>OUR SKILLS</p>
                    <h1> <span>Certificates</span> &<br/>Education</h1>
                </div>
               </div>
               <div className="rightbox">
                    <LogosCarousel/> 
               </div>
               <div className='exper'>
               <div className="certificates">
                            <div className="certificate" data-aos="fade-right" data-aos-delay="300">
                                <p>2023</p>
                                <img src={cisko} alt="" />
                                <span>Php Fundamentals</span>       
                            </div>
                            <div className="certificate"  data-aos="fade-right" data-aos-delay="600">
                                <p>2024</p>
                                <img src={garage} alt="" />
                                <span>Full Stack Development</span>
                            </div>
                            <div className="certificate"  data-aos="fade-right" data-aos-delay="800">
                                <p>2018/2024</p>
                                <img src={Aztu} alt="" />
                                <span>Baku State College of Communications and Transport under the Azerbaijan <br/> Technical University</span>
                            </div>
                    </div>
                    <section class="experience-section">
                            <h2 class="section-title">Experience</h2>

                            <div class="experience-card"  data-aos="fade-left" data-aos-delay="300">
                                <h3 class="company">UPTECH MMC</h3>
                                <p class="role">Frontend Developer</p>
                                <p class="period">December 2023 - July 2024</p>
                                <p class="description">
                                    At UPTECH MMC, I was responsible for developing and optimizing user interfaces using React, JavaScript .
                                </p>
                            </div>

                    </section>
               </div>
       </div>
    )
}

export default Awards