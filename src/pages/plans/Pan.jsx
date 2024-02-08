

import Header from '../../Component/Header';
import HeaderImage from "../../image/pan.jpg";
import Card from "../../UI/Card";
import { panCard } from "../../data";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import "./plans.css"

const PanCard = () => {
  return (
    <>
          <Helmet>
  <title>Simplify Your Tax Obligations with Tax Servicez - India's Top Provider of Online PAN Registration and Tax Filing Services</title>
  <meta
   name="description"
   content="Get your PAN registration done effortlessly with Tax Servicez, India's leading provider of online tax solutions. Trust us to handle your tax obligations and make the process hassle-free for you. Contact us today to learn more."
  />
</Helmet>
       <Header title="" image={HeaderImage}>
        
      </Header> 

      <section className="plans">
      <div className="container plans__container">
        {
          panCard.map(({id,name,desc,price,features})=>{
            return <Card key={id} className="plan">
            <h3>{name}</h3>
            <h1>{`₹ ${price}`}</h1><h2>/-</h2>
            <h5>{desc}</h5>
            {/* <small>{desc}</small> */}
            
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

export default PanCard