import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/selfassessment9.png";
import {blogsServiceSelfassessment} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const SelfBlog = () => {
  return (
    <>
         <Helmet>
  <title>Easy Tax Payments: TDS/TCS, Advance Tax, Self-Assessment Tax | Secure & Convenient | Tax Servicez</title>
  <meta
   name="description"
   content="With Tax Servicez, paying your TDS/TCS, Advance Tax, and Self-Assessment Tax is now a breeze. Our secure and convenient platform ensures timely tax payments, saving you time and effort. Simplify your tax process today with Tax Servicez. "
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceSelfassessment.map(({title,desc,
 descone,desctwo,descthree,boldA,boldA1
 
 
 
 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>
 <p>{desc}</p>
 <p>{descone}</p>
 <p>{desctwo}</p>
 <p>{descthree}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>
 <p>{boldA1}</p>
 

 </div> 
)
 })}



 <div style={{
    display: "flex",
    justifyContent: "end",
}}>
<div style={{width:"8rem",height:"5rem",}}>
{
  blogsServiceDSC.map(({avatar})=>{
   return <img src={avatar} alt="blogpic"/>
    
  })
}
<Link to="/blogspost/newpost/tranding"><span style={ {   border: "2px solid",
    width: "110px",
    height: "33px",background:"#5a3434 " ,color:"white"}}><FcReading/>Click here</span> </Link>

</div>
</div>
   
    </>
  )
}
export default SelfBlog