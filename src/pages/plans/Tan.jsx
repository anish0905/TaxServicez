// import React from 'react'

import Header from '../../Component/Header';
import HeaderImage from "../../image/tan.png";
import Card from "../../UI/Card";
import { tanApplication } from "../../data";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import "./plans.css"

const TanApplication = () => {
  return (
    <>
          <Helmet>
  <title>Register TAN Online | Tax Filing Services for Indian Businesses | Tax Servicez</title>
  <meta
   name="description"
   content='Register TAN online with Tax Servicez and experience hassle-free tax filing services for your Indian businesses. Our tax experts ensure accurate and timely TAN registration and filing to keep your business compliant with the latest tax regulations. Contact us now to streamline your tax process.'
  />
</Helmet>

       <Header title="" image={HeaderImage}>
        
      </Header> 

      <section className="plans">
      <div className="container plans__container">
        {
          tanApplication.map(({id,name,desc,price,features})=>{
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

export default TanApplication