import React from 'react'
import "./home.css"
import MainHeader from '../../Component/MainHeader'
import Programs from '../../Component/Programs'
// import Values from '../../Component/Values'
import FAQs from '../../Component/FAQs'
import Testimonials from '../../Component/Testimonials';
import { Helmet } from 'react-helmet'




const Home = () => {
  return (
  <>
  <Helmet>
  <title>GST and Income Tax | Tax Return Filing Services India Tax Servicez Taxservicez.com</title>
  <meta
   name="description"
   content="Get hassle-free tax solutions with Tax Servicez, your one-stop-shop for GST, ITR, TDS/TCS, and income tax queries in India. Our expert team provides convenient online. tax filing services to help you manage your taxes efficiently."

  />
</Helmet>

    <MainHeader/>
    <Programs/>
    {/* <Values/> */}
    <FAQs/>
    <Testimonials/>
    

    </>
  )
}

export default Home