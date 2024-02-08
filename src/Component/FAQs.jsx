// import React from 'react'

import SectionHead from "./SectionHead";
import { FaQuoteRight } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";


const FAQs = () => {
  return (
    <>
      <Helmet>
  <title>Tax Servicez</title>
  <meta
   name="description"
   content='GEt info for fav blogs'
  />
</Helmet>

    <section className="faqs">
    

<div className="container faqs__container">
    <SectionHead icons={<FaQuoteRight/>} title="FAQs"/>

    <div className="faqs__wrapper">
        {
            faqs.map(({id,question,answer})=>{ 
                return <FAQ key={id} question={question} answer={answer}/>
            })
        }
    </div>
</div>
</section>
    </>
    
  )
}

export default FAQs