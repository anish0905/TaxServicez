import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/pan8.png";
import {blogsServicePAN} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const PanBlog = () => {
  return (
    <>
              <Helmet>
  <title>Register PAN Online | Tax Filing Services in India</title>
  <meta
   name="description"
   content="Simplify Your Tax Obligations with Tax Servicez - India's Top Provider of Online PAN Card Registration and Tax Filing Services. Trust us to handle your PAN registration effortlessly and make the process hassle-free for you. Contact us today to learn more."
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServicePAN.map(({title,desc ,descone
 ,boldA
 ,boldA1
 ,boldA2
 ,boldA3
 ,boldA4
 ,boldA5
 ,boldA6
 ,boldA7
 ,boldA8
 ,boldA9
 ,boldA10
 ,boldB
 ,boldB1
 ,boldB2
 ,boldC
 ,boldC1
 ,boldD
 ,boldD1
 ,boldD2
 ,boldD3
 ,boldD4
 ,boldD5
 ,boldE
 ,boldE1
 ,boldE2
 ,boldE3
 ,boldF
 ,boldF1
 ,boldF2
 ,boldF3
 ,boldF4
 ,boldF5
 ,boldF6
 ,boldF7
 ,boldF8
 ,boldG
 ,boldG1
 ,boldG1sub1
 ,boldG1sub2
 ,boldG1sub3
 ,boldG1sub4
 ,boldH
 ,boldH1
 ,boldH1sub1
 ,boldH1sub2
 ,boldH1sub3
 ,boldI
 ,boldI1
 ,boldI1sub1
 ,boldI1sub2
 ,boldI1sub3
 ,boldI1sub4
 ,boldJ
 ,boldJ1
 ,boldJ1sub1
 ,boldJ1sub2
 ,boldJ1sub3

 
 
 
 
 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>
 <p>{desc}</p>
 <p>{descone}</p>
 <h3>{boldA}</h3>
 <p>{boldA1}</p>
 <p>{boldA2}</p>
 <p>{boldA3}</p>
 <p>{boldA4}</p>
 <p>{boldA5}</p>
 <p>{boldA6}</p>
 <p>{boldA7}</p>
 <p>{boldA8}</p>
 <p>{boldA9}</p>
 <p>{boldA10}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldB}</h3></Link>
 <p>{boldB1}</p>
 <p>{boldB2}</p>
 <h3>{boldC}</h3>
 <p>{boldC1}</p>
 <h3>{boldD}</h3>
 <p>{boldD1}</p>
 <p>{boldD2}</p>
 <p>{boldD3}</p>
 <p>{boldD4}</p>
 <p>{boldD5}</p>
 <h3>{boldE}</h3>
 <p>{boldE1}</p>
 <p>{boldE2}</p>
 <p>{boldE3}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldF}</h3></Link>
 <p>{boldF1}</p>
 <p>{boldF2}</p>
 <p>{boldF3}</p>
 <p>{boldF4}</p>
 <p>{boldF5}</p>
 <p>{boldF6}</p>
 <p>{boldF7}</p>
 <p>{boldF8}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldG}</h3></Link>
 <p>{boldG1}</p>
 <p>{boldG1sub1}</p>
 <p>{boldG1sub2}</p>
 <p>{boldG1sub3}</p>
 <p>{boldG1sub4}</p>
 <h3>{boldH}</h3>
 <p>{boldH1}</p>
 <p>{boldH1sub1}</p>
 <p>{boldH1sub2}</p>
 <p>{boldH1sub3}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldI}</h3></Link>
 <p>{boldI1}</p>
 <p>{boldI1sub1}</p>
 <p>{boldI1sub2}</p>
 <p>{boldI1sub3}</p>
 <p>{boldI1sub4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldJ}</h3></Link>
 <p>{boldJ1}</p>
 <p>{boldJ1sub1}</p>
 <p>{boldJ1sub2}</p>
 <p>{boldJ1sub3}</p>

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

export default PanBlog