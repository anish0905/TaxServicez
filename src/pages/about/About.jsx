import './about.css';
import { Link } from 'react-router-dom';


import React from "react";
import Header from '../../Component/Header';
import HeaderImage from "../../image/aboutus.png"
import StoryImages from "../../image/ourStory.png"
import VisionImages from "../../image/ourVision.png"
import MissionImages from "../../image/ourMission.png"
import { Helmet } from 'react-helmet';

const About =()=>{

    return(
        <>
        <Helmet>
  <title>Tax Servicez: Your One-Stop Solution for GST and Income Tax Filing in India</title>
  <meta
   name="description"
   content='Get to know the team of tax experts behind Tax Servicez, the leading provider of GST and income tax solutions in India. Our experienced tax consultants are committed to providing customized solutions for businesses and individuals alike. From GST registration and compliance to income tax return filing and tax planning, we offer a comprehensive suite of services to meet your needs. Discover how we can help you navigate the complex world of taxation and achieve your financial goals. Contact Tax Servicez today for reliable and hassle-free tax solutions!'
  />
</Helmet>
<Header title="" image={HeaderImage}>
</Header>
<section style={{color:"black"}}>
<p>Welcome to <Link to="/" style={{color:"red",fontWeight: 'bold' }}>Tax Servicez</Link>, the company that was founded in 2021 with a simple mission - to help individuals and entrepreneurs manage their personal and business lives with ease. At Tax Servicez, we believe in building a strong and healthy relationship with our customers, and we do this by providing them with high-quality premium services at affordable prices.</p>

<p>We take pride in our commitment to delivering fast, reliable, and error-free services to our clients. We understand that managing personal and business finances can be challenging, which is why we are always ready to assist and guide you through the financial matters required by you, your family, and your businesses.</p>

<p>Our team of highly skilled and experienced professionals is dedicated to providing you with traditional accounting and taxation services that meet your specific needs. Whether you need help with <Link to="/" style={{color:"red",fontWeight: 'bold' }}>Tax Filing</Link>  or require guidance on financial planning and management, we are always there for you.</p>

<p>At Tax Servicez, we believe in transparency and honesty in all our dealings. We take the time to understand your needs and provide you with personalized solutions that are tailored to your specific requirements. We strive to make your experience with us as seamless as possible and ensure that you can focus on what matters most - running your business and enjoying your personal life.</p>

<p>Thank you for choosing Tax Servicez as your financial partner. We look forward to serving you and building a long-lasting relationship.</p>

</section>




<section className="about__story">
<div className="container about__story-container">
<div className="about__section-image">
<img src={StoryImages}  alt=" Our Story Images"/>
</div>
<div className="about__section-content">
 <Link to="/about" style={{color:"red",fontWeight: 'bold' }}><h1>Our Story</h1></Link> 
 <p>At TAX Servicez, we are proud to have started our firm in the face of adversity. Like many others, we were affected by the COVID-19 pandemic and the resulting lockdowns. As employees were being laid off and businesses were shutting down, we found ourselves in a difficult situation.</p>

 <p>However, we refused to let these challenges hold us back. Instead, we saw an opportunity to create something new and innovative. We decided to start our own firm, with the mission of providing high-quality financial services to clients in a different way.</p>

 <p>We started from zero, with nothing to lose, and worked tirelessly to build our reputation and earn the trust of our clients. Today, we are proud to say that we have succeeded in our mission. People have started recognizing us, and we are grateful for their support and trust.</p>

 <p>We have kept the cost of our services low, so that there is little load on our clients. We understand that financial management can be a significant expense, and we believe that everyone should have access to high-quality services at an affordable price. That's why we are committed to providing our clients with the best value for their money.</p>

 <p> At TAX Servicez, we are passionate about what we do, and we are committed to serving our clients with honesty, integrity, and professionalism. We are grateful for the opportunity to make a positive impact in the lives of our clients, and we look forward to continuing to serve them for years to come.</p>

  

</div>

 </div>

</section>

{/* Vision */}


<section className="about__Vision">
<div className="container about__Vision-container">

<div className="about__section-content">
 <Link to="/about" style={{color:"red",fontWeight: 'bold' }}><h1>Our Vision</h1></Link> 
<p>Our vision at Tax Servicez is to be a trustworthy and reliable professional firm that serves a maximum number of clients in handling their tax liabilities. We aim to build strong and genuine relationships with our clients by providing high-quality services. Our goal is to establish our brand globally and to achieve a yearly growth of at least 10% for our business.</p>

</div>
<div className="about__section-image">
<img src={VisionImages}  alt=" Our Vision Images"/>
</div>

 </div>

</section>


{/* Mission */}

<section className="about__mission"> 
<div className="container about__mission-container">
<div className="about__section-image">
<img src={MissionImages}  alt=" Our Mission Images"/>
</div>
<div className="about__section-content">
 <Link to="/about" style={{color:"red",fontWeight: 'bold' }}><h1>Our Mission</h1></Link>  
<p> Our mission is to formulate progressive tax policies and to deliver quality services. We mold ourselves to be consumer’s 1st choice. Our mission is to upgrade our skills, to establish a general tone or organizational growth and build a professional and motivated workspace.</p>

</div>

 </div>

</section>



</>
    )
}
export default About