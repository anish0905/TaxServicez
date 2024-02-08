import React from 'react'



const EmptyList = () => {
  return (
    <div className='emptyList-wrap'
    style={{
     display:"flex",
     justifyContent:"center"
    }} 
    >
        {/* <img src="/image/searching.gif" alt="gif"  
        style={
          {
            maxWidth:"250px",
            width:"100%"
          }
        } />  */}
        
         {/* empaty.gif*/ }


    
 <video controls width="600" height="400">
      <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/connection-disconnected-8290927-6640910.mp4" type="video/mp4" controls  />
      Your browser does not support the video tag.
    </video>


         
    </div>
  )
}

export default EmptyList