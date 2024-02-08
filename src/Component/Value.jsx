import React from 'react';

// import React from 'react';
import {AiFillCaretRight, AiOutlineCrown}from "react-icons/ai"
import SectionHead from "./SectionHead";

import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { blogsService } from '../blogService';

const Value = ()=>{

  return (
    <section className="programs">
        <div className="container programs__container">
    <SectionHead icons={<AiOutlineCrown/>} title="Service Blogs"/>

 <div className="program__wrapper">
{
    blogsService.map(({id,icons,title,info,path})=>{
    return(
        <Card className="programs__program" key={id}>
        {/* <span>{icons}</span> */}
          <h4>{title}</h4>
          <small>{info}</small>
          <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
        </Card>
    )

    })
}

 </div>
 </div>
    </section>
  )
}



export default Value 