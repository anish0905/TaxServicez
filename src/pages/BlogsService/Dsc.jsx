import React from 'react'
import './blogsService.css';
import HeaderImage from "../../image/DSC3.png";
import {blogsServiceDSC} from '../../blogService';
import { Link } from 'react-router-dom';
import {FcReading} from 'react-icons/fc';
import { Helmet } from 'react-helmet';


const DscBlog = () => {
  return (
    <>
          <Helmet>
  <title>DSC - Digital Signature Certificate</title>
  <meta
   name="description"
   content='Need to register your digital signature for tax filing in India? Let Tax Servicez simplify the process for you with our expert online tax solutions. Trust us to handle your tax obligations effortlessly, so you can focus on other important matters. Contact us today to learn more.'
  />
</Helmet>
 <img src={HeaderImage} alt="coverImg" className='blogsItem__cover' />

 {blogsServiceDSC.map(({title

 ,desc
 ,desconesub1
 ,desconesub2
 ,desconesub3
 ,desconesub4
 ,desconesub5
 ,desconecsub6
 ,boldA
 ,boldA1
 ,boldB
 ,boldB1
 ,boldB1sub1
 ,boldB1Sub2
 ,boldB1sub3
 ,boldB2
 ,boldB3
 ,boldB4
 ,boldC
 ,boldC1
 ,boldD
 ,boldD1
 ,boldD1sub1
 ,boldD1sub2
 ,boldD1sub3
 ,boldE
 ,boldE1
 ,boldE2
 ,boldF
 ,boldF1
 ,boldF2
 ,boldF3
 ,boldF4
 ,boldF5
 ,boldG
 ,boldG1
 ,boldG1sub1
 ,boldG1sub2
 ,boldG1sub3
})=>{
return(
  <div className='blogsItem__wrap'>
  <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{title}</h3></Link>
 
 <p>{desc}</p>
 <p>{desconesub1}</p>
 <p>{desconesub2}</p>
 <p>{desconesub3}</p>
 <p>{desconesub4}</p>
 <p>{desconesub5}</p>
 <p>{desconecsub6}</p>
 <Link to=""><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldA}</h3></Link>
 <p>{boldA1}</p>
 <h3>{boldB}</h3>
 <p>{boldB1}</p>
 <p>{boldB1sub1}</p>
 <p>{boldB1Sub2}</p>
 <p>{boldB1sub3}</p>
 <p>{boldB2}</p>
 <p>{boldB3}</p>
 <p>{boldB4}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldC}</h3></Link>

 <p>{boldC1}</p>
 <h3>{boldD}</h3>
 <p>{boldD1}</p>
 <p>{boldD1sub1}</p>
 <p>{boldD1sub2}</p>
 <p>{boldD1sub3}</p>
 <h3>{boldE}</h3>
 <p>{boldE1}</p>
 <p>{boldE2}</p>
 <Link to="/blogshome"><h3 style={{textDecorationLine: 'underline', background:"#f7f7f7"}}>{boldF}</h3></Link>
 
 
 <p>{boldF1}</p>
 <p>{boldF2}</p>
 <p>{boldF3}</p>
 <p>{boldF4}</p>
 <p>{boldF5}</p>
 <h3>{boldG}</h3>
 <p>{boldG1}</p>
 <p>{boldG1sub1}</p>
 <p>{boldG1sub2}</p>
 <p>{boldG1sub3 }</p>
 </div> 
)
 }
 )
 }



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

export default DscBlog