import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/ITR ready7.png";
import {blogsServiceITR} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const ItrBlog = () => {
  return (
    <>
      <Helmet>
  <title>Effortless Income Tax Returns with Tax Servicez | Expert ITR Filing Services in India</title>
  <meta
   name="description"
   content="Don't let the hassle of filing income tax returns in India stress you out. Let Tax Servicez help make the process effortless for you. Our team of experts provides reliable assistance for ITR filing and ensures your taxes are filed accurately and on time. Contact us today and experience a stress-free tax season."
  />
</Helmet>

 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceITR.map(({title,desc,
  descone,desctwo,descthree,descfour,descfive, descsix,
  boldA, boldA1,boldA2, boldA3, boldB,boldB1,boldB2, boldB3
 , boldB4, boldB5, boldC,boldC1,boldC2, boldC3, boldC4, boldC5,
 boldC6, boldC7, boldC8, boldC9, boldC10, boldD, boldD1, boldD2,
 boldD3, boldD4, boldD5, boldD6, boldD7, boldD8, boldD9, boldD10, boldD11,
 boldE, boldE1, boldE2, boldE3, boldE4, boldE5, boldE6, boldE7,
 boldE8, boldE9, boldE10
 
 
 
 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>

 <p>{desc}</p>
 <p>{descone}</p>
 <p>{desctwo}</p>
 <p>{descthree}</p>
 <p>{descfour}</p>
 <p>{descfive}</p>
 <p>{descsix}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>
 <p>{boldA1}</p>
 <p>{boldA2}</p>
 <p>{boldA3}</p>
 <h3>{boldB}</h3>
 <p>{boldB1}</p>
 <p>{boldB2}</p>
 <p>{boldB3}</p>
 <p>{boldB4}</p>
 <p>{boldB5}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldC}</h3></Link>
 <p>{boldC1}</p>
 <p>{boldC2}</p>
 <p>{boldC3}</p>
 <p>{boldC4}</p>
 <p>{boldC5}</p>
 <p>{boldC6}</p>
 <p>{boldC7}</p>
 <p>{boldC8}</p>
 <p>{boldC9}</p>
 <p>{boldC10}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldD}</h3></Link>
 <p>{boldD1}</p>
 <p>{boldD2}</p>
 <p>{boldD3}</p>
 <p>{boldD4}</p>
 <p>{boldD5}</p>
 <p>{boldD6}</p>
 <p>{boldD7}</p>
 <p>{boldD8}</p>
 <p>{boldD9}</p>
 <p>{boldD10}</p>
 <p>{boldD11}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldE}</h3></Link>
 <p>{boldE1}</p>
 <p>{boldE2}</p>
 <p>{boldE3}</p>
 <p>{boldE4}</p>
 <p>{boldE5}</p>
 <p>{boldE6}</p>
 <p>{boldE7}</p>
 <p>{boldE8}</p>
 <p>{boldE9}</p>
 <p>{boldE10}</p>

 



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

export default ItrBlog