import React from 'react'
import "./contact.css"
import{MdEmail} from "react-icons/md"
import{SiHelpdesk} from "react-icons/si"
import{IoLogoWhatsapp} from "react-icons/io"
import {FaLinkedin} from "react-icons/fa";
import Header from "../../Component/Header"
import HeaderImage from "../../image/getInTouch.png"

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import ContactForm from '../contectForm/ContectForm'
import SendEmail from '../contectForm/SendEmail';
const Contact = () => {
  return (
    <>   
    <Helmet>
  <title>Contact Us - Tax Servicez</title>
  <meta
   name="description"
   content="Get in touch with Tax Servicez's expert team for all your taxation-related queries and requirements. Our team is equipped to handle a wide range of services, including GST registration, ITR filing, TDS/TCS compliance, and more. Contact us today and avail yourself of our top-notch services to simplify your tax-related tasks and ensure hassle-free tax compliance."

  />
</Helmet>
    
    
     <Header title="" image={HeaderImage}>
    </Header>
    

    <section className="contact">
    
    <div className="container contact__container">
    <p>
    If You  would require any <Link to="/blogshome"style={{color:"red",fontWeight: 'bold' }}>Tax related services</Link>, then we are here.
    <br />
      Please Contact Us
    </p> 
   
    <div className="contact__wrapper">
    
    
    <a href="mailto:taxservicezprovider@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>
    <a href="mailto:help@taxservicez.com" target="_blank" rel="noreferrer" ><SiHelpdesk/></a>
    <a href="https://wa.me/+918591854060" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
    <a href="https://www.linkedin.com/in/tax-servicez" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
    
    
    </div>
    
    </div>
    <SendEmail/>
     <ContactForm/>
     </section>

     </>

  )
}

export default Contact