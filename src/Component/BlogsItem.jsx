import React from 'react'
import Chip from './Chip'
import { Link } from "react-router-dom";


const BlogsItem = ({blogs:
  {id,
  covers,title,discription,authorAvatar,authorName,  createdAt
, category}
}) => 
    <div className='blogsItem__wrap'>

     <img src={covers} alt="coverImg" className='blogsItem__cover' />
     {/* <Link to= {`/blogs/${id}`} className="blogs__link"> <Chip label={ category}/></Link> */}
    <Chip label={ category}/>
    <Link to= {`/blogs/${id}`} className="blogs__link"><h3>{title}</h3></Link>

    
    <p className='blogsItem__desc'>{discription}</p>

    <main>
      <div className="blogsItem__author">
        <img src={authorAvatar} alt="avatar" />

        <div>
          <h6>{authorName}</h6>
          <p>{ createdAt}</p>
        </div>

      </div> 

      <Link to= {`/blogs/${id}`} className="blogs__link"> more→</Link>

    </main>

    
    
    </div>


export default BlogsItem