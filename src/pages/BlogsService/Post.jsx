import React from "react";
import BlogsHeader from "../../Component/BlogsHeader";

import BlogsList from "../../Component/BlogsList";
import Searchbar from "../../Component/Searchbar";
// import "./blogsHome.css";
import { blogList } from "../../blogpost";
import { useState } from "react";
import EmptyList from "../../Component/Empty";

import { Helmet } from "react-helmet";

const BlogsHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //Search submit function
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  //search for blogs by Categary
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);

    // console.log(setBlogs)
  };

  const handleClearSearch = () => {
    setBlogs(BlogsList);
    setSearchKey("");
  };

  return (
    <>
     <Helmet>
  <title>Expert Guide to the Latest GST and Income Tax Updates - Your Ultimate Resource from Tax Servicez</title>
  <meta
   name="description"
   content="Stay Up-to-Date on Indian Taxation with Tax Servicez Expert's GST and Income Tax Blog. Get the Latest News and Insights on Taxes and Accounting."

  />
</Helmet>



      <section>
      <h2>Latest Post</h2>
      
        <BlogsHeader />

        <Searchbar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* Blogs List and Empaty */}

        {!blogs.length ? <EmptyList /> : <BlogsList blogs={blogs.category} />} 

        {/* <BlogsItem blogs={blogList}/>  */} 


      </section>
    </>
  );
};

export default BlogsHome;
