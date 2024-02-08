import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/TDS-TCS11.png";
import {returnBlogs} from '../../blogService';
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';
const ReturnBlog = () => {
  return (
    <>
   <Helmet>
  <title>Simplify TDS and TCS Return Filing with Tax Servicez | Hassle-free Tax Deductions and Collections for Your Business</title>
  <meta
   name="description"
   content="Simplify tax deductions and collections for your business with Tax Servicez. Our platform offers hassle-free TDS and TCS return filing, ensuring compliance with Indian tax laws. Trust our expert assistance to make tax deductions and collections effortless for your business. Get started now with Tax Servicez."
  />
</Helmet>
  
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {returnBlogs.map(({title,desc,descone,   desctwo,desctwo1
 , desctwo2,descthree, descfour, descfive, boldA, boldA1,
 boldA2, boldB, boldB1, boldC,boldC1,
 boldC1sub1, boldC1sub2, boldC1sub3, boldC1sub4,
 boldC1sub5, boldC1sub6,boldD
 ,boldD1
 ,boldE
 ,boldE1
 ,boldE2
 ,boldF
 ,boldF1
 ,boldF2
 ,boldF3
 ,boldF4
 ,boldG
 ,boldG1
 ,boldG2
 ,boldG3
 ,boldG4
 ,boldH
 ,boldH1
 ,boldH1sub1
 ,boldH1sub2
 ,boldH1sub3
 ,boldH1sub4
 ,boldI
 ,boldI1
 ,boldI2
 ,boldI2sub1
 ,boldI2sub2
 ,boldI3
 ,boldI3sub1
 ,boldI3sub2
 ,boldI4
 ,boldI4sub1
 ,boldI4sub2
 ,boldJ
 ,boldJ1
 ,boldJ2
 ,boldJ3
 ,boldK
 ,boldK1
 ,boldK2
 ,boldK3
 ,boldL
 ,boldL1
 ,boldL1sub1
 ,boldL1sub2
 ,boldL1sub3
 ,boldL1sub4
 ,boldL1sub5
 ,boldL1sub6
 ,boldL1sub7
 ,boldL1sub8
 ,boldL1sub9
 ,boldL2
 ,boldM
 ,boldM1
 ,boldM1sub1
 ,boldM1sub2
 ,boldM1sub3
 ,boldM2
 ,boldN
 ,boldN1
 ,boldN1sub1
 ,boldN1sub2
 ,boldN2
 ,boldO
 ,boldO1
 ,boldO1sub1
 ,boldO1sub2
 ,boldO1sub3
 ,boldO2
 ,boldO3
 ,boldP
 ,boldP1
 ,boldP2
 ,boldP3
 ,boldP4
 ,boldQ
 ,boldQ1
 ,boldQ2
 ,boldQ3
 ,boldQ4
,boldR
 ,boldR1
 ,boldR2
 ,boldR3
 ,boldR4
 ,boldR5

 
 
 
 })=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>
 <p>{desc}</p>
 <p>{descone}</p>
 <p>{desctwo}</p>
 <p>{desctwo1}</p>
 <p>{desctwo2}</p>
 <p>{descthree}</p>
 <p>{descfour}</p>
 <p>{descfive}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>
 <p>{boldA1}</p>
 <p>{boldA2}</p>
 <h3>{boldB}</h3>
 <p>{boldB1}</p>
 <h3>{boldC}</h3>
 <p>{boldC1}</p>
 <p>{boldC1sub1}</p>
 <p>{boldC1sub2}</p>
 <p>{boldC1sub3}</p>
 <p>{boldC1sub4}</p>
 <p>{boldC1sub5}</p>
 <p>{boldC1sub6}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldD}</h3></Link>
 <p>{boldD1}</p>
 <h3>{boldE}</h3>
 <p>{boldE1}</p>
 <p>{boldE2}</p>
 <h3>{boldF}</h3>
 <p>{boldF1}</p>
 <p>{boldF2}</p>
 <p>{boldF3}</p>
 <p>{boldF4}</p>
 <p>{boldG}</p>
 <p>{boldG1}</p>
 <p>{boldG2}</p>
 <p>{boldG3}</p>
 <p>{boldG4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldH}</h3></Link>
 <p>{boldH1}</p>
 <p>{boldH1sub1}</p>
 <p>{boldH1sub2}</p>
 <p>{boldH1sub3}</p>
 <p>{boldH1sub4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldI}</h3></Link>
 <p>{boldI1}</p>
 <p>{boldI2}</p>
 <p>{boldI2sub1}</p>
 <p>{boldI2sub2}</p>
 <p>{boldI3}</p>
 <p>{boldI3sub1}</p>
 <p>{boldI3sub2}</p>
 <p>{boldI4}</p>
 <p>{boldI4sub1}</p>
 <p>{boldI4sub2}</p>
 <h3>{boldJ}</h3>
 <p>{boldJ1}</p>
 <p>{boldJ2}</p>
 <p>{boldJ3}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldK}</h3></Link>
 <p>{boldK1}</p>
 <p>{boldK2}</p>
 <p>{boldK3}</p>
 <h3>{boldL}</h3>
 <p>{boldL1}</p>
 <p>{boldL1sub1}</p>
 <p>{boldL1sub2}</p>
 <p>{boldL1sub3}</p>
 <p>{boldL1sub4}</p>
 <p>{boldL1sub5}</p>
 <p>{boldL1sub6}</p>
 <p>{boldL1sub7}</p>
 <p>{boldL1sub8}</p>
 <p>{boldL1sub9}</p>
 <p>{boldL2}</p>
 <h3>{boldM}</h3>
 <p>{boldM1}</p>
 <p>{boldM1sub1}</p>
 <p>{boldM1sub2}</p>
 <p>{boldM1sub3}</p>
 <p>{boldM2}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldN}</h3></Link>
 <p>{boldN1}</p>
 <p>{boldN1sub1}</p>
 <p>{boldN1sub2}</p>
 <p>{boldN2}</p>
 <h3>{boldO}</h3>
 <p>{boldO1}</p>
 <p>{boldO1sub1}</p>
 <p>{boldO1sub2}</p>
 <p>{boldO1sub3}</p>
 <p>{boldO2}</p>
 <p>{boldO3}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldP}</h3></Link>
 <p>{boldP1}</p>
 <p>{boldP2}</p>
 <p>{boldP3}</p>
 <p>{boldP4}</p>
 <h3>{boldQ}</h3>
 <p>{boldQ1}</p>
 <p>{boldQ2}</p>
 <p>{boldQ3}</p>
 <p>{boldQ4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldR}</h3></Link>
 <p>{boldR1}</p>
 <p>{boldR2}</p>
 <p>{boldR3}</p>
 <p>{boldR4}</p>
 <p>{boldR5}</p>

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

export default ReturnBlog