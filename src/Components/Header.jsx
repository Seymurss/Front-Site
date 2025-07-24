import '../assets/Css/Header.css'
import profileImg from '../assets/img/profile.jpg'; 
import github from '../assets/img/icon2.png';
import javascript from '../assets/img/javascript-logo-javascript-icon-transparent-free-png.webp'
import VsCode from '../assets/img/Visual_Studio_Code_1.35_icon.svg.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";


const Header = () =>{
    return (
        <div className='Header'>
            <div className="info">
                <div className="profileCard">
                    <div className="imgcard">
                        <div className="img">
                           <img src={profileImg} alt="profile" />
                        </div>

                        <img src={github} className='bouncing-icon github' alt="" />
                        <img src={javascript} className='bouncing-icon Javascript' alt="" />
                        <img src={VsCode} className='bouncing-icon VsCode' alt="" />

                        <div className="profilInfo">
                            <span>Seymur Farziyev</span>
                            <p>Back - End Developer</p>
                            <div className="profilsosial">
                                <a><FaLinkedinIn/></a>
                                <a><FaWhatsapp/></a>
                                <a><FaGithub/></a>
                                <a><IoLogoInstagram/></a>
                                <a><FaFacebookF/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoCard">
                    <h1>Hello, I’m <span className='name'>Seymur Farziyev</span>, <br/> <span>Back-End PHP</span> <br/> and <span class="bord">Laravel Developer  <i></i></span> <br/> Based in Azerbaijan.</h1>
                    <div className='Carerinfo'>
                        <div><h1>02</h1><p>Years<br/> of Experance</p></div>
                        <div><h1>40</h1><p>+<br/> Project</p></div>
                        <div>
                            <a href="#0" class="butn butn-md butn-bord radius-5 skew">
                                <span>Download C.V</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="triangle-right"></div>
            </div>
        </div>
    )
}

export default Header