import React from 'react'

import {Link} from "react-router-dom"
import "./notfound.css"
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <>
          <Helmet>
  <title>Effortless Tax Filing in India with Tax Servicez - Your Trusted Online Tax Filing Partner</title>
  <meta
   name="description"
   content='File your taxes with ease and confidence with Tax Servicez, the premier online tax filing service in India. Trust us to be your reliable tax filing partner. Get started now!'
  />
</Helmet>

    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to ="/" className='btn'> Go Back Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound