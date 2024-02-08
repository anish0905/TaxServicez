// import React from 'react'

import Header from '../../Component/Header';
import HeaderImage from "../../image/gst.png";
import Card from "../../UI/Card";
import { gstSection } from "../../data";
import { Link } from "react-router-dom";

import "./plans.css"
import { Helmet } from 'react-helmet';

const GstSection = () => {
  return (
    <>
          <Helmet>
  <title>Streamline Your Business with GST Registration from Tax Servicez - India's Top Provider of Goods and Services Tax Solutions</title>
  <meta
   name="description"
   content="Get Expert GST Registration and Consulting Services from Tax Servicez - India's Leading Online Platform for Goods and Services Tax Solutions"
  />
</Helmet>
      <Header title="" image={HeaderImage}>
        
      </Header>

      <section className="plans">
      <div className="container plans__container">
        {
          gstSection.map(({id,name,desc,price,features,})=>{
            return <Card key={id} className="plan">
            <h3>{name}</h3>
            <h1>{`₹ ${price}`}</h1><h2>/-</h2>
            <h5>{desc}</h5>
            
            
            <h4>Required Documents</h4>
            {
              features.map(({feature,available},index)=>{
                return <p key={index} className={!available ?"disabled":" "}>{feature}</p>

              })
            }

            <button className="btn lg"><Link to='/contact'>Contact</Link></button>

            </Card>
          })
        }
      </div>
       </section>
    </>
  )
}

export default GstSection