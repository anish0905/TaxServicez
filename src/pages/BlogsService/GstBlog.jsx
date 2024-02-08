import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/gst6.png";
import {blogsServiceGST} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const GstBlog = () => {
  return (
    <>
      <Helmet>
  <title> Register for GST with Tax Servicez | Simplified Goods and Services Tax Filing   </title>
  <meta
   name="description"
   content=" Register for GST hassle-free with Tax Servicez. Our platform offers simplified Goods and Services Tax filing and expert assistance to ensure compliance with GST regulations. Let us handle your GST registration and filing so you can focus on your business. Contact Tax Servicez today to get started.  "
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceGST.map(({title,desc,despone,desptwo,despthree,despfour,despfive,boldA,boldA1,boldA2,boldA3,
 boldA4,boldA5,boldA6,boldA7,boldA8,boldA9,boldB,boldB1,boldB2sub1,boldB2sub2,boldB2sub3
 ,boldB3,boldB3sub1,boldB3sub2,boldB3sub3,boldB3sub4
 ,boldB4
 ,boldB5
 ,boldB5sub1
 ,boldB5sub2
 ,boldB5sub3
 ,boldB5sub4
 ,boldB6
 ,boldB6sub1
 ,boldB6sub2
,boldB6sub3,
 boldB7
 ,boldB8
 ,boldC
 ,boldC1,
  boldC2,
 boldC3,boldC4,
 boldC4sub1,
 boldC4sub2,
 boldC4sub3,
 boldC4sub4,
 boldC5,
 boldC6,
 boldC6sub1,
 boldC6sub2,
 boldC6sub3,
 boldC6sub4,
 boldC7,
 boldC8,
 boldC9,
 boldC9sub1,
 boldC9sub2,
 boldC9sub3,
 boldC10,
 boldD,
 boldD1,
 boldD2,
 boldD3,
 boldD4,
 boldD5,
 boldD5sub1,
 boldD5sub2,
 boldD5sub3,
 boldD6,
 boldE,
 boldE1,
 boldE2,
 boldE3,
 boldE4,
 boldE5,
 boldE6,
 boldE7,
 boldE8,
 boldE8sub1,
 boldE8sub2,
 boldE8sub3,
 boldE8sub4,
 boldE9,
 boldE10,
 boldE10ub1,
 boldE10sub2,
 boldE10sub3,
 boldE11,
 boldF,
  boldF1,
  boldF2,
  boldF3,
  boldF4,
  boldF5,
  boldB2,
 boldF5ub1,
 boldF5sub2,
  boldF5sub3,
   boldF5sub4,
   boldF6,
   boldF7,
   boldG,
   boldG1,
  boldG2,
  boldG3,
  boldH,
  boldH1,
  
    boldH2,
     boldH3,
  boldH4,
  boldH5,
  boldH6,
   boldH7,
   boldI,
 boldJ,
   boldK,
    boldK1,
   boldK2,
  boldK3,
    boldK4,
   boldK5,
  boldL,
  boldL1,

 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>

 <p>{desc}</p>
 <p>{despone}</p>
 <p>{ desptwo}</p>
 <p>{despthree}</p>
 <p>{despfour}</p>
 <p>{despfive}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>

 <p>{boldA1}</p>
 <p>{boldA2}</p>
 <p>{boldA3}</p>
 <p>{boldA4}</p>
 <p>{boldA5}</p>
 <p>{boldA6}</p>
 <p>{boldA7}</p>
 <p>{boldA8}</p>
 <p>{boldA9}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldB}</h3></Link>

 <p>{boldB1}</p>
 <p>{boldB2}</p>
 <p>{boldB2sub1}</p>
 <p>{boldB2sub2}</p>
 <p>{boldB2sub3}</p>
 <p>{boldB3}</p>
 <p>{boldB3sub1}</p>
 <p>{boldB3sub2}</p>
 <p>{boldB3sub3}</p>
 <p>{boldB3sub4}</p>
 <p>{boldB4}</p>
 <p>{boldB5}</p>
 <p>{boldB5sub1}</p>
 <p>{boldB5sub2}</p>
 <p>{boldB5sub3}</p>
 <p>{boldB5sub4}</p>
 <p>{boldB6}</p>
 <p>{boldB6sub1}</p>
 <p>{boldB6sub2}</p>
 <p>{boldB6sub3}</p>
 <p>{boldB7}</p>
 <p>{boldB8}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldC}</h3></Link>

 <p>{boldC1}</p>
 <p>{ boldC2}</p>
 <p>{boldC3}</p>
 <p>{boldC4}</p>
 <p>{boldC4sub1}</p>
 <p>{boldC4sub2}</p>
 <p>{boldC4sub3}</p>
 <p>{boldC4sub4}</p>
 <p>{boldC5}</p>
 <p>{boldC6}</p>
 <p>{boldC6sub1}</p>
 <p>{boldC6sub2}</p>
 <p>{boldC6sub3}</p>
 <p>{boldC6sub4}</p>
 <p>{boldC7}</p>
 <p>{boldC8}</p>
 <p>{boldC9}</p>
 <p>{boldC9sub1}</p>
 <p>{boldC9sub2}</p>
 <p>{boldC9sub3}</p>
 <p>{boldC10}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldD}</h3></Link>

 <p>{boldD1}</p>
 <p>{boldD2}</p>
 <p>{boldD3}</p>
 <p>{boldD4}</p>
 <p>{boldD5}</p>
 <p>{boldD5sub1}</p>
 <p>{boldD5sub2}</p>
 <p>{boldD5sub3}</p>
 <p>{boldD6}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldE}</h3></Link>

 <p>{boldE1}</p>
 <p>{boldE2}</p>
 <p>{boldE3}</p>
 <p>{boldE4}</p>
 <p>{boldE5}</p>
 <p>{boldE6}</p>
 <p>{boldE7}</p>
 <p>{boldE8}</p>
 <p>{boldE8sub1}</p>
 <p>{boldE8sub2}</p>
 <p>{boldE8sub3}</p>
 <p>{boldE8sub4}</p>
 <p>{boldE9}</p>
 <p>{boldE10}</p>
 <p>{boldE10ub1}</p>
 <p>{boldE10sub2}</p>
 <p>{boldE10sub3}</p>
 <p>{boldE11}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldF}</h3></Link>

 <p>{ boldF1}</p>
 <p>{ boldF2}</p>
 <p>{ boldF3}</p>
 <p>{ boldF4}</p>
 <p>{ boldF5}</p>
 <p>{boldF5ub1}</p>
 <p>{boldF5sub2}</p>
 <p>{ boldF5sub3}</p>
 <p>{  boldF5sub4}</p>
 <p>{  boldF6}</p>
 <p>{  boldF7}</p>
 <h3>{  boldG}</h3>
 <p>{  boldG1}</p>
 <p>{ boldG2}</p>
 <p>{ boldG3}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldH}</h3></Link>

 <p>{ boldH1}</p>
 <p>{   boldH2}</p>
 <p>{    boldH3}</p>
 <p>{ boldH4}</p>
 <p>{ boldH5}</p>
 <p>{ boldH6}</p>
 <p>{  boldH7}</p>
 <h5>{  boldI}</h5>
 <h5>{boldJ}</h5>
 <h5>{  boldK}</h5>
 <p>{   boldK1}</p>
 <p>{  boldK2}</p>
 <p>{ boldK3}</p>
 <p>{   boldK4}</p>
 <p>{  boldK5}</p>
 <h3>{ boldL}</h3>
 <p>{ boldL1}</p>


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

export default GstBlog