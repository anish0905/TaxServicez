import React from 'react'
import BlogsItem from './BlogsItem';
import { blogList } from "../blogpost";

const BlogsList =()=>{
    return(
        <div className="blogsList__Wrap" style={{ marginTop: "106px"}}>
            {blogList.map((blogs)=>(
<BlogsItem blogs={blogs} key={blogs.id}/>
            ))}
        </div>
    )

}
export default BlogsList