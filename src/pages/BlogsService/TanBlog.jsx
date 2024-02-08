import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/tan10.png";
import {blogsServiceTAN} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const TanBlog = () => {
  return (
    <>
           <Helmet>
  <title>Register TAN Online | Professional Tax Filing Services in India | Tax Experts | Tax Servicez</title>
  <meta
   name="description"
   content='Register TAN online with Tax Servicez and experience hassle-free tax filing services for your Indian businesses. Our tax experts ensure accurate and timely TAN registration and filing to keep your business compliant with the latest tax regulations. Contact us now to streamline your tax process.'
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceTAN.map(({title,desc,
  descone
 ,boldA
 ,boldA1
 ,boldA2
 ,boldA3
 ,boldA4
 ,boldB
 ,boldB1
 ,boldB2
 ,boldC
 ,boldC1
 ,boldC2
 ,boldC3
 ,boldC4
 ,boldD
 ,boldD1
 ,boldD2
 ,boldD3
 ,boldD4
 ,boldD5
 ,boldE
 ,boldE1
 ,boldE2

 
 
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
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldB}</h3></Link>
 <p>{boldB1}</p>
 <p>{boldB2}</p>
 <h3>{boldC}</h3>
 <p>{boldC1}</p>
 <p>{boldC2}</p>
 <p>{boldC3}</p>
 <p>{boldC4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldD}</h3></Link>
 <p>{boldD1}</p>
 <p>{boldD2}</p>
 <p>{boldD3}</p>
 <p>{boldD4}</p>
 <p>{boldD5}</p>
 <h3>{boldE}</h3>
 <p>{boldE1}</p>
 <p>{boldE2}</p>


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

export default TanBlog