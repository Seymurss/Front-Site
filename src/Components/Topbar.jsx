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
            <a><FaLinkedinIn/></a>
            <a><FaWhatsapp/></a>
            <a><FaGithub/></a>
            <a><IoLogoInstagram/></a>
            <a><FaFacebookF/></a>
        </div>
        <a className='email'> Seymur@Website.com</a>
    </div>
  )
}

export default Topbar