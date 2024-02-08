

import Header from '../../Component/Header';
import HeaderImage from "../../image/DSC.png";
import Card from "../../UI/Card";
import { dsc } from "../../data";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import "./plans.css"

const Dsc = () => {
  return (
    <>
          <Helmet>
  <title>Digital Signature Registration |Tax Filing in India with Tax Servicez</title>
  <meta
   name="description"
   content="Need help filing your taxes in India? Let Tax Servicez simplify the process for you with our expert digital signature registration and online tax solutions. Trust us to handle your tax obligations effortlessly, so you can focus on what matters most. Contact us today to learn more."
  />
</Helmet>

       <Header title="" image={HeaderImage}>
        
      </Header> 

      <section className="plans">
      <div className="container plans__container">
        {
          dsc.map(({id,name,desc,price,features})=>{
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

export default Dsc