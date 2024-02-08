// import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { FcSelfServiceKiosk } from "react-icons/fc";
import SectionHead from "./SectionHead";
import { portal } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Portal = () => {
  return (

    <>
     <Helmet>
  <title>File Your Taxes Hassle-Free with India Tax Servicez - The Best Online Tax Filing Service</title>
  <meta
   name="description"
   content="Tax Servicez is online portal is a one-stop-shop for all your taxation-related needs in India. With our user-friendly platform, you can avail of a wide range of services, including GST registration, ITR filing, TDS/TCS compliance, and more, all from the comfort of your home or office. Stay up to date on the latest taxation-related news and updates and simplify your tax-related tasks with Tax Servicez comprehensive portal.
"/>
</Helmet>

    <section className="programs">
      <div className="container programs__container">
        <SectionHead
          icons={<FcSelfServiceKiosk />}
          title="Self Portal"
          style={{ marginTop: "15px" }}
        />

        <div className="program__wrapper">
          {portal.map(({ id, icons, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icons}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Click here
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Portal;
