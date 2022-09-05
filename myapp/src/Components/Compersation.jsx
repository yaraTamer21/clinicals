
import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'

const Compersation = () => {

    const options = {
        buttons: {
          backgroundColor: 'rgba(30,30,36,0.8)',
          iconColor: 'rgba(255, 255, 255, 0.8)',
          iconPadding: '10px',
          showAutoplayButton: true,
          showCloseButton: true,
          showDownloadButton: true,
          showFullscreenButton: true,
          showNextButton: true,
          showPrevButton: true,
          showThumbnailsButton: true,
          size: '40px'
        }
    }
  return (
   <>
     <div className="compresion py-5">
        <h1 className='text-center fw-bolder'>قبل  <span style={{color:"#dcac34"}}>&</span>بعد</h1>
        
        <SRLWrapper options={options}> 
        <div className="row  mt-3 container  align-items-center justify-content-center m-auto">
       

         
            
        <div className="col-lg-4 col-md-4 col-6  col-sm-6">
            
                <div className="items">
                    
                <img src='https://drammar-clinics.com/images/products/products-img-11.jpg' className='w-100'/>
              
                </div>
            </div>


            <div className="col-lg-4 col-md-4 col-6 col-sm-6">
                <div className="items">
                <img src='https://drammar-clinics.com/images/products/products-img-9.jpg' className='w-100'/>
                
                </div>
            </div>

            <div className="col-lg-4 col-md-4  col-6 col-sm-6">
                <div className="items">
                <img src='https://drammar-clinics.com/images/products/products-img-8.jpg' className='w-100'/>
               
                </div>
            </div>

            
            <div className="col-lg-4 col-md-4  mt-4 col-6 col-sm-6 ">
                <div className="items">
                <img src='https://drammar-clinics.com/images/products/products-img-12.jpg' className='w-100'/>
                
                </div>
            </div>


            <div className="col-lg-4 col-md-4  mt-4 col-6 col-sm-6">
                <div className="items">
                <img src='https://drammar-clinics.com/images/products/products-img-8.jpg' className='w-100'/>
               
                </div>
            </div>

            <div className="col-lg-4 col-md-4  mt-4 col-6 col-sm-6">
                <div className="items">
                <img src='https://drammar-clinics.com/images/products/products-img-7.jpg' className='w-100'/>
               
                </div>
            </div>
         

        </div>
        </SRLWrapper>
     </div>
   
   </>
  
  )
}

export default Compersation