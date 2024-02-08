// import React from 'react'

import Header from '../../Component/Header';
import HeaderImage from "../../image/selfassessment.png";
import Card from "../../UI/Card";
import { tdsSelfassessment } from "../../data";
import { Link } from "react-router-dom";
import "./plans.css";
import { Helmet } from 'react-helmet';

const Tdsself = () => {
  return (
    <>
      <Helmet>
  <title>Tax Payments Made Easy: TDS/TCS, Advance Tax, and Self-Assessment Tax with Tax Servicez</title>
  <meta
   name="description"
   content='With Tax Servicez, paying taxes has never been easier. Our platform offers secure and convenient payment options for TDS/TCS, Advance Tax, and Self-Assessment Tax, ensuring you stay compliant with Indian tax laws. Simplify your tax payments and avoid penalties with Tax Servicez.'
  />
</Helmet>

       <Header title="" image={HeaderImage}>
        
      </Header> 

      <section className="plans">
      <div className="container plans__container">
        {
          tdsSelfassessment.map(({id,name,desc,price,features})=>{
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

export default Tdsself