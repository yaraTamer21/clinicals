import React from 'react'

const Videos = () => {
  return (
   <>
       
    <h1 className='text-center mt-4'>الفديوهات</h1> 
    <div className="row  container-fluid py-3 m-auto">
        <div className="col-lg-4 mt-sm-3 col-md-6">
            <div className="items">
            <iframe className='w-100' style={{height:"270px"}}  src="https://www.youtube.com/embed/AiueR1xTuJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div className="col-lg-4  mt-sm-3 col-md-6">
            <div className="items">
            <iframe  className='w-100'style={{height:"270px"}} src="https://www.youtube.com/embed/p_OCjeTxHLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
            </div>
        </div>

        <div className="col-lg-4  mt-sm-3 m-auto col-md-6">
            <div className="items">
            <iframe  className='w-100' style={{height:"270px"}} src="https://www.youtube.com/embed/TcU2v5Pmv6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
            </div>
        </div>
    </div>

   </>
  )
}

export default Videos