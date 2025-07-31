import React from 'react'
import '../assets/Css/Topbar.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";


function Topbar() {
  return (

    <div className='Topbar'>
        <a className='logo'> SEYMUR</a>
        <div className='sosial-links'>
            <a href='https://www.linkedin.com/in/seymur-ferz-33b577288/' target="_blank"><FaLinkedinIn/></a>
            <a href='https://wa.me/994559491633' target="_blank"><FaWhatsapp/></a>
            <a href='https://github.com/Seymurss' target="_blank"><FaGithub/></a>
            <a href='https://www.instagram.com/seymur_ig/' target="_blank"><IoLogoInstagram/></a>
            <a href='https://www.facebook.com/share/128zgjyq2w7/' target="_blank"><FaFacebookF/></a>
        </div>
        <a href='mailto:seymurfarziyev.dev@gmail.com' className='email'> seymurfarziyev.dev@gmail.com</a>
    </div>
  )
}

export default Topbar