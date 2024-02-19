import { BrowserRouter,Routes,Route } from 'react-router-dom';

import React from 'react'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Portal from "./Component/Portal"
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer"
import Programs from './Component/Programs';
import GstSection from './pages/plans/GstSection';
import ItrSection from './pages/plans/ItrSection';
import Tds from './pages/plans/Tds';
import Form26qb from './pages/plans/Form26qb';
import PanCard from './pages/plans/Pan';
import TanApplication from './pages/plans/Tan';
import Dsc from './pages/plans/Dsc';
import Form16 from './pages/plans/Form16';
// import Tdsself from './pages/plans/Tdsself';
import FAQs from './Component/FAQs'

import BlogsHome from './pages/blogsHome/BlogsHome';
import Blogs from "./pages/blogs/Blogs";

import DscBlog from './pages/BlogsService/Dsc';
import ItrBlog from './pages/BlogsService/ItrBlog';
import Form16Blogs from './pages/BlogsService/Form16Blogs';
import FormQbBlog from './pages/BlogsService/FormQbBlog';
import GstBlog from './pages/BlogsService/GstBlog';
import PanBlog from './pages/BlogsService/PanBlog';
import ReturnBlog from './pages/BlogsService/ReturnBlog';
import SelfBlog from './pages/BlogsService/SelfBlog';
import TanBlog from './pages/BlogsService/TanBlog';
import BlogsList from "./Component/BlogsList"
import {Helmet} from 'react-helmet';
import ScrollToTop from "./Component/ScrollToTop"
import Tdsself from './pages/plans/Tdsself';


const App = () => {
  return (
    <>
   <div>
  
<BrowserRouter>

<Navbar/>
<Helmet>
  <title>GST and Income Tax | Tax Return Filing Services India Tax Servicez Taxservicez.com</title>
  <meta
   name="description"
   content='Looking for a one-stop solution to all your GST and income tax queries in India? Tax Servicez has got you covered! Our team of experts offers end-to-end tax solutions, including GST registration, compliance, income tax return filing, and tax planning. Contact Tax Servicez today for tax solutions tailored to your needs.'

  />
</Helmet>

<ScrollToTop/>
<Routes> 
<Route index element={<Home/>}/>
 <Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path="services" element={<Programs/>}/>
<Route path='selfservice' element={<Portal/>}/>


<Route path='blogshome' element={<BlogsHome/>}/>   
<Route path='blogs/:id' element={<Blogs/>}/>
<Route path ='blogspost/newpost/tranding' element={<BlogsList/>}/>
<Route path='*' element={<NotFound/>}/>

<Route path='gstservices' element={<GstSection/>}/>
<Route path='itrservices' element={<ItrSection/>}/>
<Route path='tds/tcs' element={<Tds/>}/>
<Route path='form26QB' element={<Form26qb/>}/>
<Route path ='pancard' element={<PanCard/>}/> 
<Route path='tdsself' element={<Tdsself/>}/>
<Route path ='tanapplication' element={<TanApplication/>}/>
<Route path ='digitalsignaturecertificate' element={<Dsc/>}/>
<Route path ='formgeneration' element={<Form16/>}/>
<Route path ='faqs' element={<FAQs/>}/>
<Route path ='digitalsignaturecertificate/dscblogs' element={<DscBlog/>}/>
<Route path ='itrblogservice' element={<ItrBlog/>}/>
<Route path ='form16blogservice' element={<Form16Blogs/>}/>
<Route path ='form26QB/Form/26QB/Filing/Correction' element={<FormQbBlog/>}/>
<Route path ='gstblogservice' element={<GstBlog/>}/>
<Route path ='panblogservice' element={<PanBlog/>}/>
<Route path ='tds/tcs/blogservice' element={<ReturnBlog/>}/>
<Route path ='payment/directtax/selfassessment' element={<SelfBlog/>}/>
<Route path ='tanblogservice' element={<TanBlog/>}/>

</Routes>
<Footer/>
   </BrowserRouter>
   </div>
    </>
  )
}

export default App