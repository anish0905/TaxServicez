import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Chip from '../../Component/Chip';
import EmptyList from '../../Component/Empty';
import './blogs.css';
import { Helmet } from 'react-helmet';
import { blogList } from '../../blogpost';

const Blogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);



  useEffect(() => {
    let selectedBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [id]);


  return (
    <>
  

      <section>
        <Link to="/" className="blog-goback">
          <span> &#8592;</span> Go Back
        </Link>

        {blog ? (
          <div className="blog-wrap">
            <header>
            <Helmet>
  <title>{blog.title}</title>
  <meta
   name="description"
   content='Get to know the team of tax experts behind Tax Servicez, the leading provider of GST and income tax solutions in India. Our experienced tax consultants are committed to providing customized solutions for businesses and individuals alike. From GST registration and compliance to income tax return filing and tax planning, we offer a comprehensive suite of services to meet your needs. Discover how we can help you navigate the complex world of taxation and achieve your financial goals. Contact Tax Servicez today for reliable and hassle-free tax solutions!'
  />
</Helmet>
              <p className="blog-date">Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <h4>{blog.titleOne}</h4>
              <div className="blog-subCategory">
                {blog.subCategory.map((category, index) => (
                  <div key={index}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.covers} alt="cover" />
            <p className="blog-desc">{blog.discription}</p>
            <h3>{blog.first}</h3>

          </div>
        ) : (
          <EmptyList />
        )}
      </section>

    </>
  );
};

export default Blogs;
