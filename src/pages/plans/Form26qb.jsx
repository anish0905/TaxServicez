import Header from "../../Component/Header";
import HeaderImage from "../../image/26qb.png";
import Card from "../../UI/Card";
import { formQb } from "../../data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./plans.css";

const Form26qb = () => {
  return (
    <>
          <Helmet>
  <title>Simplified Form 26QB Filing with Tax Servicez - Effortlessly Pay TDS on the Sale of Immovable Property in India</title>
  <meta
   name="description"
   content='Need help paying TDS on the sale of immovable property in India? Let Tax Servicez simplify the process for you with our expert Form 26QB filing services. Trust us to handle your tax obligations effortlessly, so you can focus on other important matters. Contact us today to learn more.'
  />
</Helmet>
      <Header title="" image={HeaderImage}></Header>

      <section className="plans">
        <div className="container plans__container">
          {formQb.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <h1>{`₹ ${price}`}</h1>
                <h2>/-</h2>
                <h5>{desc}</h5>

                <h4>Required Documents</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : " "}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">
                  <Link to="/contact">Contact</Link>
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Form26qb;
