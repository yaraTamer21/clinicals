import React from 'react'

const Contact = () => {
  return (
    <div className="contact py-5">
        <div className="row container-fluid justify-content-center align-items-center">

            <div className="col-lg-4 col-md-6 pe-2">
                <div className="items">
                    <h1 className='fw-bolder pe-3 mb-3'>تواصل معنا</h1>
                   <div className="row pe-3 pe-lg-4 pe-sm-4 pe-md-4">
                    <div className="col-3">
                       <div className="icons">
                       <i class="fa-solid fa-phone"></i>
                       </div>
                    </div> 
                    <div className="col-9 d-flex flex-column  ">
                        <p className='fw-bolder'>كن علي اتصال</p>
                        <p className='fw-bolder'>01030028628</p>

                    </div>
                   </div>

                   <div className="row mt-4  pe-3 pe-lg-4 pe-sm-4 pe-md-4">
                    <div className="col-3">
                       <div className="icons">
                       <i class="fa-solid fa-share"></i>
                       </div>
                    </div> 
                    <div className="col-9 d-flex flex-column  ">
                        <p className='fw-bolder'> اراسال</p>
                        <p className='w-100'>INFO@DRAMMAR-CLINICS.COM</p>

                    </div>
                   </div>

                   <div className="row mt-4 pe-3 pe-lg-4 pe-sm-4 pe-md-4">
                    <div className="col-3">
                       <div className="icons">
                       <i class="fa-solid fa-phone"></i>
                       </div>
                    </div> 
                    <div className="col-9 d-flex flex-column  ">
                        <p className='fw-bolder'>قم بالزيارة الآن</p>
                        <p className='fw-bolder'>المنصورة - المشاية - امام كلية طب اسنان
</p>

                    </div>
                   </div>
                </div>



                
            </div>
            <div className="col=lg-8 col-md-6">
                <div className="items">
                    <div className="row">
                        <div className="col-6">
                            <div className="items">
                                <input className='form-control py-3' type='text' placeholder='الاسم'/ >
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="items">
                                <input className='form-control py-3' type='text' placeholder='رقم الهاتف'/ >
                            </div>
                        </div>
                    </div>

                    <input type='email' placeholder='البريد الالكتروني' className='form-control my-4 py-3'/>
             <textarea className='w-100 form-control'></textarea>

             <button >ارسال</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact