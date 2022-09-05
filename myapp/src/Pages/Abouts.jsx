import React from 'react'
import About from '../Components/About'

const Abouts = () => {
  return (
    <>
      <About />

      <div className="about-pages mb-4">
        <div className="content-about-data flex-column">
          <h2>في عيادات د. عمار لطب الاسنان
            علي ابتسامتك :)</h2>


          <div className="parent-circles">
            <div className="images-circle">
            <a href='https://www.youtube.com/embed/AiueR1xTuJ0' target='_blanck'>
            <img src='./images/play.png' className='w-100'/>

            </a>
            </div>

            <div style={{ animationDelay: "0s" }} className="circles">

            </div>

            <div style={{ animationDelay: ".5s" }} className="circles">

            </div>

            <div style={{ animationDelay: "1s" }} className="circles">

            </div>

            <div style={{ animationDelay: "1.5s" }} className="circles">

            </div>





          </div>


        </div>



      </div>



      <div className="works pb-4 ">
      <div className="container">
      <h1 className='text-center '>فريق العمل</h1>

<div className="row mt-4">
  <div className="col-4">
    <div className="items text-center">
      <img src='https://drammar-clinics.com/images/team-1.jpg' className='w-100'/>

      <h3 className='my-3'>دكتور عمار</h3>
      <h4 className='text-muted'>فريق طبي إحترافي</h4>
    </div>
  </div>

  <div className="col-4">
    <div className="items text-center">
      <img src='https://drammar-clinics.com/images/team-1.jpg' className='w-100'/>

      <h3 className='my-3'>دكتور عمار</h3>
      <h4 className='text-muted'>فريق طبي إحترافي</h4>
    </div>
  </div>

  <div className="col-4">
    <div className="items text-center">
      <img src='https://drammar-clinics.com/images/team-1.jpg' className='w-100'/>

      <h3 className='my-3'>دكتور عمار</h3>
      <h4 className='text-muted'>فريق طبي إحترافي</h4>
    </div>
  </div>
</div>
      </div>
      </div>

    </>
  )
}

export default Abouts