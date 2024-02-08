
import Header from '../../Component/Header';
import HeaderImage from "../../image/form16.png";
import Card from "../../UI/Card";
import { form16 } from "../../data";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import "./plans.css"

const Form16 = () => {
  return (
    <>
          <Helmet>
  <title>Simplified Form Generation for Form 16, 16A, 16B, 27D, 27EQ with Tax Servicez - Your Trusted India's Online Tax Solution Provider</title>
  <meta
   name="description"
   content='Generate your tax forms with ease and accuracy with Tax Servicez, the trusted online tax solution provider in India. We simplify the process of generating Form 16, 16A, 16B, 27D, 27EQ, so you can focus on other important aspects of your business. Contact us today to learn more.'
  />
</Helmet>

       <Header title="" image={HeaderImage}>
        
      </Header> 

      <section className="plans">
      <div className="container plans__container">
        {
          form16.map(({id,name,desc,price,features})=>{
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

export default Form16