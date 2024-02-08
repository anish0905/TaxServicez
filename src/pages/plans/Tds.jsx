import Header from "../../Component/Header";
import HeaderImage from "../../image/TDS-TCS.png";

import { tcsTds } from "../../data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Tds = () => {
  return (
    <>
      <Helmet>
  <title>Effortless TDS and TCS Return Filing with Tax Servicez - Simplify Tax Deductions and Collections for Your Business</title>
  <meta
   name="description"
   content='Simplify tax deductions and collections for your business with Tax Servicez. Our platform offers hassle-free TDS and TCS return filing services, ensuring that you stay compliant with Indian tax laws. Trust our reliable and secure service for all your tax needs. Get started now with Tax Servicez.'
  />
</Helmet>

    <Header title=""  image={HeaderImage}>
     
    </Header>

    <section className='plans'>
    <div className="container plans__container">
        {
            tcsTds.map(({id,name,desc,price,features})=>{
return <Card key={id} className="plan">
    <h3>{name}</h3>
    <small>{desc}</small>
    <h1>{`₹ ${price}`}</h1>
    <h4>Required Documents</h4>
    {
        features.map(({feature,available},index)=>{
            return <p key={index} className={!available?"disabled":" "}>{feature}</p>

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

export default Tds
