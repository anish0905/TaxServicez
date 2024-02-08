import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/form164.png";
import {blogsServiceForm16,} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const Form16Blogs = () => {
  return (
    <>
  <Helmet>
  <title> Generate Tax Certificates Online with Tax Servicez | Form 16, 16A, 16B, 27D, 27EQ    </title>
  <meta
   name="description"
   content=" Simplify the process of generating tax certificates with Tax Servicez. Our online platform enables you to generate Form 16, 16A, 16B, 27D, and 27EQ with ease and convenience. Trust our reliable and secure service for all your tax certificate needs. Get started now with Tax Servicez.  "
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceForm16.map(({title,desc
  ,descone
 ,desctwo
  ,descthree
 ,descfour
     ,descfive
         ,descsix
  ,descseven
  ,desceight
         ,descnine
   ,descten
   ,desceleven
    ,desctwelve
    ,descthireteen
    ,desctforteen
  ,descfifteen
         ,descsixteen
   ,descseventeen
  ,desceighteen
 ,descnineteen
     ,desctwenty
   ,desctwentyone
  ,desctwentytwo
      ,desctwentythree
  ,desctwentythreesub1
   ,desctwentythreesub2
    ,desctwentythreesub3
 ,desctwentythreesub4
  ,desctwentyfour
    ,boldA
     ,boldA1
      ,   boldA2
   ,boldA3
    , boldA4
     ,   boldA5
      ,boldA6
       ,   boldB
   ,boldB1
   ,boldB2
 ,boldB3

 
 
 
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
 <p>{descseven}</p>
 <p>{desceight}</p>
 <p>{descnine}</p>
 <p>{descten}</p>
 <p>{desceleven}</p>
 <p>{desctwelve}</p>
 <p>{descthireteen}</p>
 <p>{desctforteen}</p>
 <p>{descfifteen}</p>
 <p>{descsixteen}</p>
 <p>{descseventeen}</p>
 <p>{desceighteen}</p>
 <p>{descnineteen}</p>
 <p>{desctwenty}</p>
 <p>{desctwentyone}</p>
 <p>{desctwentytwo}</p>
 <p>{desctwentythree}</p>
 <p>{desctwentythreesub1}</p>
 <p>{desctwentythreesub2}</p>
 <p>{desctwentythreesub3}</p>
 <p>{desctwentythreesub4}</p>
 <p>{desctwentyfour}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>

 <p>{boldA1}</p>
 <p>{boldA2}</p>
 <p>{boldA3}</p>
 <p>{boldA4}</p>
 <p>{boldA5}</p>
 <p>{boldA6}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldB}</h3></Link>

 <p>{boldB1}</p>
 <p>{boldB2}</p>
 <p>{boldB3}</p>
 

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

export default Form16Blogs