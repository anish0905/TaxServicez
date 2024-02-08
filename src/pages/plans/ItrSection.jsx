import Header from "../../Component/Header";
import Image from "../../image/ITR ready.png";
import "./plans.css";

import { itrSection } from "../../data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ItrSection = () => {
  return (
    <>
          <Helmet>
  <title>Hassle-free ITR Filing with Tax Servicez | Your Reliable Partner for Income Tax Returns in India</title>
  <meta
   name="description"
   content='Trust Tax Servicez for easy and stress-free filing of your income tax returns in India. Our expert team is committed to providing reliable assistance and guidance throughout the entire ITR filing process. Contact us today and let us take care of your tax worries.'
  />
</Helmet>
      <Header title="" image={Image}></Header>

      <section className="plans">
        <div className="container plans__container">
          {itrSection.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹ ${price}`}</h1>
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

export default ItrSection;
