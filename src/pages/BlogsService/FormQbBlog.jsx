import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/26qb1.png";
import { blogsService26QB} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const FormQbBlog = () => {
  return (
    <>
    <Helmet>
  <title>Effortlessly Pay TDS on Immovable Property Sale with Form 26QB | Tax Servicez     </title>
  <meta
   name="description"
   content=" Simplify the process of paying TDS on the sale of immovable property in India with Tax Servicez. Our platform enables you to easily file Form 26QB and make secure TDS payments. Trust our reliable and hassle-free service for all your TDS needs. Get started now with Tax Servicez.  "
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 { blogsService26QB.map(({title,desc
  ,desconep
   ,desctwop
  ,descthreep
   ,descfourp
   ,descfivep
     ,descsixp
    ,boldA
    , boldA1
 , boldA2
 , boldA3
 , boldA4
 , boldA5
 , boldA6
 , boldA7, boldB, boldB1, boldB2, boldB3, boldB4 ,boldB5

, boldB6, boldB7
   
 
 
 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>

 <p>{desc}</p>
 <p>{desconep}</p>
 <p>{  desctwop}</p>
 <p>{ descthreep}</p>
 <p>{  descfourp}</p>
 <p>{  descfivep}</p>
 <p>{    descsixp}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>

 <p>{ boldA1}</p>
 <p>{   boldA2}</p>
 <p>{  boldA3}</p>
 <p>{  boldA4}</p>
 <p>{   boldA5}</p>
 <p>{ boldA6}</p>
 <p>{boldA7}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldB}</h3></Link>

 <p>{boldB1}</p>
 <p>{ boldB2}</p>
 <p>{  boldB3}</p>
 <p>{  boldB4}</p>
 <p>{   boldB5}</p>
 <p>{ boldB6}</p>
 <p>{  boldB7}</p>
 

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

export default FormQbBlog