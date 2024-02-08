import React from 'react'
import { Link } from 'react-router-dom';
import Images from "../image/mainpage.png"

const MainHeader = () => {
  return (
 <header className='main__header'>

 <div className="container  main__header-container">
<div className="main__header-left">
  <h4>24*7 full support</h4>
 <Link to="/blogshome"> <h1 className='smallresp'> A COMPLETE GST AND INCOME TAX SOLUTION AT ONE PLACE </h1></Link>
  <p>Maximizing Your Benefits: Premium Taxation and Legal Services Combined in One Place!.
  </p>

<Link to="/services" className='btn lg'>Get Started</Link>

</div> 
<div className="main_header-right">
<div className="main__header-circle"></div> 
<div className="main__header-image">
  <img src={Images} alt="main-header-images" />
</div>
</div>
 </div>
 </header>
  )
}

export default MainHeader