import {Link} from "react-router-dom"
import Logo from "../image/taxsolutin.png";
import {FaLinkedin} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {BsInstagram}from "react-icons/bs";
import{MdEmail} from "react-icons/md";
import{IoLogoWhatsapp} from "react-icons/io";




const Footer=()=>{
    return(
        <footer>
    <div className="container footer__container">
<article>
    <Link to="/" className='logo'>
        <img src={Logo} alt="Footer Logo" style={{"width":"12rem", "height":"5rem"}}/>
    </Link>
    <p>Platinum Palacio</p>
    <p>sec-23,Ulwe ,Navi Mumbai</p>
    <p>Maharashtra,410206</p>

    <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tax-servicez" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
        
        <a href="https://twitter.com/Tax_Servicez" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
        <a href="https://www.instagram.com/taxservicez5" target="_blank" rel="noreferrer noopener"><BsInstagram/></a>
        <a href="mailto:taxservicezprovider@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>

    <a href="https://wa.me/+919867032406" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
    
           </div>
</article>




<article>
<h4>Compliance</h4> 
<Link to="/itrservices">Income Tax Return</Link> 
<Link to="/gstservices">GST</Link>
 <Link to="/tds/tcs">TDS</Link>
 <Link to="/tds/tcs">TCS</Link>
 <Link to="/">Accounting</Link>
   
</article>
<article>
    <h4>Registation</h4>
    <Link to="/pancard">PAN</Link>
    <Link to="/tanapplication">TAN</Link>
    <Link to="/digitalsignaturecertificate">DSC</Link>
    <Link to="/gstservices">GST</Link>
    <Link to="/blogshome">Blogs</Link>
  
</article>

<article>
    <h4>Get In Touch</h4>
    <Link to="/contact">Contact Us</Link>
    <a href="mailto:hel////p@taxservicez.com" target="_blank" rel="noreferrer" >Help Desk</a>

     <Link to="/faqs">FAQs</Link>
    <Link to="/blogspost/newpost/tranding">Post</Link>
    
    
</article>




    </div>

    <div className="footer__copyright">
    <small> Copyright © 2024.  All Rights Reserved @ Tax Servicez</small>
     </div>

     </footer>
    
    )
}
export default Footer
