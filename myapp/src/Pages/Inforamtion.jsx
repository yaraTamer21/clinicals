import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Apis from '../Apis'
const Inforamtion = () => {
  const { category } = useParams()
  const products = Apis.filter((i) => i.category === category)
  const product = products[0]
  console.log(product)
  console.log(category)

  return (
    <>

      <div className="container py-5">
        <div className="row ">


          <div className="col-lg-8 ">
            <div className="items">
              <img src={product.images[0]} className='w-100 ps-5' />
              <h2 className='my-4'>{product.headerss[0]}</h2>
              <p className='mb-4'>{product.paragraphs[0]}</p>
              <hr />

              <h2 className='my-4'> {product.headerss[1]} </h2>
              <p className='mb-4'>{product.paragraphs[1]}</p>
              <hr />



              <h2 className='my-4'> {product.headerss[2]}  </h2>
              <p>{product.paragraphs[2]} </p>
              <p className='mb-4'>{product.paragraphs[3]}</p>
              <hr />


              <h2 className='my-4'>{product.headerss[3]}</h2>
              <p>{product.paragraphs[4]}</p>
              <p className='mb-4'> {product.paragraphs[5]}
              </p>
              <hr />


              <h2 className='my-4'>{product.headerss[4]} </h2>
              <p>{product.paragraphs[6]}</p>
              <p className='mb-4'> {product.paragraphs[7]}
              </p>
              <hr />
              <p>{product.paragraphs[8]}.
              </p>

              <p className='my-3 fw-bolder'>{product.paragraphs[9]}
              </p>
              <hr />
              <div className="row mt-4">
                <div className="col-12  col-sm-6 col-lg-6 col-md-6">
                  <div className="items">
                    <img style={{ height: "356px" }} src={product.images[1]} className='w-100' />
                  </div>
                </div>

                <div className="col-12  col-sm-6 col-lg-6 col-md-6 mt-4 mt-lg-0 mt-md-0 mt-sm-0">
                  <div className="items">
                    <img style={{ height: "356px" }} src={product.images[2]} className='w-100' />

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4 mt-5   mt-md-5 mt-sm-5 mt-lg-0">
            <div className="items px-3 parent-types py-4 pe-4">
              <div>
                <h4 className='fw-bolder py-3'>الخدمات</h4>
                <NavLink to='/info/ابتسامه'>
                  <div className="types py-2 px-2 mb-3">


                    <h4 className='mb-0'>ابتسامه هوليوود</h4>

                  </div>
                </NavLink>
                <NavLink to='/info/زراعه'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  زراعه&جراحه الفم </h4>
                  </div>
                </NavLink>
                <NavLink to='/info/تقويم'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'> تقويم الاسنان </h4>
                  </div>
                </NavLink>
                <NavLink to='/info/زراعه'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  زراعه&جراحه الفم </h4>
                  </div>
                </NavLink>
                <NavLink to='/info/تنظيف'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  تنظيف  الجير </h4>
                  </div>
                </NavLink>
                <NavLink to='/info/حشو'>


                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  الحشو التجميلي  </h4>
                  </div>
                </NavLink>
                <NavLink to='/info/تركيبات'>


                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  التركيبات  </h4>
                  </div>
                </NavLink>

                <NavLink to='/info/خلع'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  الخلع والخلع الجراحي  </h4>
                  </div>
                </NavLink>

                <NavLink to='/info/الاطفال'>

                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  حشو الاطفال  </h4>
                  </div>
                </NavLink>

                <NavLink to='/info/العصب'>


                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  حشو العصب  </h4>
                  </div>
                </NavLink>

                <NavLink to='/info/تبيض'>
                  <div className="types py-2 px-2 mb-3">
                    <h4 className='mb-0'>  تبيض  بالليزر   </h4>
                  </div>
                </NavLink>


              </div>
            </div>



            <div className="items parent-types py-4 mt-4 px-3">
              <div>
                <h4 className='fw-bolder py-3'>تواصل معنا</h4>

                <input type='text' placeholder="الاسم" className='form-control mb-4 py-3' />
                <input type='email' placeholder="البريد الالكتروني" className='form-control mb-4  py-3' />
                <input type='number' placeholder="الهاتف " className='form-control mb-4  py-3' />
                <textarea placeholder='اترك لنا رساله' className='form-control' ></textarea>
                <button >ارسال</button>
                {/* <input type='number' placeholder="الهاتف " className='form-control mb-4  py-3'/> */}




              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Inforamtion