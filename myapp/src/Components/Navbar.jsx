import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import add from '../Redux/Action';
const Navbar = () => {
    const [check, setcheck] = useState(false)
    const [lefts, setlefts] = useState(2)
    const [rights, setrights] = useState(2)
    const [translates, settranslates] = useState(100)
    const [toggles, settoggles] = useState(false)
    const [navs, setnavs] = useState(false)

    const [tops, settops] = useState(2)

    const m = useSelector((x) => x.HandleTtitle)
    console.log(m)
    const dispatch = useDispatch()


    AOS.init({
        duration: 2000,
        once: false
    });

    useEffect(() => {
        window.addEventListener("scroll", function () {
            changes()

        })
        const changes = () => {
            if (window.scrollY > 100) {
                setlefts(0)
                setrights(0)
                settops(0)
                settranslates(-40)
            }
            else {
                setlefts(2)
                setrights(2)
                settops(2)
                settranslates(100)

            }
        }




    }, [])

 const yara=(x)=>{
    settoggles(false)
    setnavs(false)
    dispatch(add(x))
 }

    return (
        <>
            <div style={{ left: `${lefts}%`, right: `${rights}%`, top: `${tops}%` }} className='navba bg-white'>
                <div className="row align-items-center ">

                    <div className="col-3 ">
                        <dic className="items d-flex align-items-center justify-content-center">
                            <img src='https://drammar-clinics.com/images/logos/logo.png' />
                        </dic>
                    </div>
                    <div className="col-9">
                        <div className="items ">
                            <ul className='d-flex lists-navbars'>
                                <NavLink to='/'onClick={()=>dispatch(add(null))}>
                                    <li className='text-white first-link'>الرئيسيه</li>

                                </NavLink>
                                <NavLink  to='/about'  onClick={()=>dispatch(add("دكتور  عماد "))} >
                                    <li>من نحن</li>
                                </NavLink>

                                <a >
                                    <div className="parent-services">
                                        <li onMouseEnter={() => setcheck(true)} >الخدمات</li>
                                        {check ?
                                            <div onMouseLeave={() => setcheck(false)} data-aos="fade-up"
                                                data-aos-duration="3000" className="list-services bg-white">
                                                <ul>
                                                    <NavLink  onClick={()=>dispatch(add("ابتسامه هوليود"))} to='/info/ابتسامه'>
                                                        <li>ابتسامه هوليود</li>
                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("زراعه&جراحه الفم"))} to='/info/زراعه'>
                                                        <li>جراحه الفم&زراعه  </li>
                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("تقويم الاسنان"))} to='/info/تقويم'>
                                                        <li > تقويم  الاسنان</li>

                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("تنظيف الجير"))} to='/info/تنظيف'>
                                                        <li> تنظيف الجير</li>

                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("جشو التجميلي"))} to='/info/حشو'>
                                                        <li> الحشو التجميلي</li>
                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("التركبيات"))} to='/info/تركيبات'>
                                                        <li>التركيبات </li>

                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("الخلع والخلع الجيراحي"))} to='/info/خلع'>
                                                        <li> الخلع والخلع الجيراجي</li>

                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("حشو الاطفال"))} to='/info/الاطفال'>
                                                        <li> حشو الاطفال</li>

                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("العصب"))} to='/info/العصب'>
                                                        <li> حشو العصب</li>
                                                    </NavLink>
                                                    <NavLink  onClick={()=>dispatch(add("تبيض  بالليزر"))} to='/info/تبيض'>
                                                        <li>  تبيض بالليزر</li>

                                                    </NavLink>

                                                </ul>
                                            </div> :
                                            ""}
                                    </div>
                                </a>

                                <NavLink to='/photos' onClick={()=>dispatch(add("الصور"))}>


                                    <li>الصور</li>
                                </NavLink>
                                <NavLink  onClick={()=>dispatch(add("الفديوهات"))} to='/videos'>
                                    <li>الفديوهات</li>
                                </NavLink>
                                <NavLink  onClick={()=>dispatch(add("المقالات"))} to='/news'>

                                    <li>المقالات</li>
                                </NavLink>

                                <NavLink  onClick={()=>dispatch(add("الاتصال بنا "))} to='/contact'>


                                    <li>اتصل  بنا</li>
                                </NavLink>




                            </ul>



                            <div className="bars d-flex justify-content-end">
                                <i onClick={() => setnavs(!navs)} class="fa-solid fa-bars-staggered fs-1  ps-5 "></i>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            {/* div of   toggles  */}
            <div className={navs ? "toggles yara" : "toggles sara"}>
                <div className={toggles ? "toggles1 py-5" : "py-5 toggles"}  >
                    <ul className='d-flex ps-0 pe-0  h-100 pt-5 mt-4  flex-column'>
                        <NavLink  onClick={()=>yara(null)} className='mt-lg-5' to='/' >
                            <li>الرئيسيه</li>

                        </NavLink>
                        <NavLink to='/about'  onClick={()=>yara("دكتور  عماد ")}  >
                            <li>من نحن</li>
                        </NavLink>

                        <NavLink onClick={() => settoggles(!toggles)} to='/services'>
                            <div>
                                <li>الخدمات {toggles ? <i class="fa-solid fa-caret-up ms-2"></i> : <i class="fa-solid fa-caret-down ms-2"></i>}</li>

                            </div>
                        </NavLink>
                        <div className={toggles ? 'list-dervices1' : 'list-dervices'}>
                            <ul className='exta-lists'>
                                <NavLink onClick={()=>yara("ابتسامه") } to='/info/ابتسامه'>
                                    <li>ابتسامه هوليود</li>
                                </NavLink>
                                <NavLink  onClick={()=>yara("زراعه&جراحه الفم") } to='/info/زراعه'>
                                    <li  >جراحه الفم&زراعه  </li>
                                </NavLink>
                                <NavLink  onClick={()=>yara("تقويم الاسنان") } to='/info/تقويم'>
                                    <li > تقويم  الاسنان</li>

                                </NavLink>
                                <NavLink  onClick={()=>yara("تنظيف الجير") } to='/info/تنظيف'>
                                    <li> تنظيف الجير</li>

                                </NavLink>
                                <NavLink  onClick={()=>yara("الحشو التجميلي") } to='/info/حشو'>
                                    <li> الحشو التجميلي</li>
                                </NavLink>
                                <NavLink  onClick={()=>yara("التركيبات") } to='/info/تركيبات'>
                                    <li>التركيبات </li>

                                </NavLink>
                                <NavLink  onClick={()=>yara("الخلع والخلع الجيراحي") } to='/info/خلع'>
                                    <li> الخلع والخلع الجيراجي</li>

                                </NavLink>
                                <NavLink  onClick={()=>yara("حشو الاطفال") } to='/info/الاطفال'>
                                    <li> حشو الاطفال</li>

                                </NavLink>
                                <NavLink  onClick={()=>yara("العصب") } to='/info/العصب'>
                                    <li> حشو العصب</li>
                                </NavLink>
                                <NavLink  onClick={()=>yara("تبيض  بالليزر") } to='/info/تبيض'>
                                    <li>  تبيض بالليزر</li>

                                </NavLink>

                            </ul>
                        </div>

                        <NavLink to='/photos' onClick={()=>yara("الصور") }>


                            <li>الصور</li>
                        </NavLink>
                        <NavLink onClick={()=>yara("الفديوهات") } to='/videos'>
                            <li>الفديوهات</li>
                        </NavLink>
                        <NavLink onClick={()=>yara(" المقالات") } to='/news'>

                            <li>المقالات</li>
                        </NavLink>

                        <NavLink onClick={()=>yara("الاتصال  بنا") } to='/contact'>


                            <li>اتصل  بنا</li>
                        </NavLink>


                    </ul>

                </div>

            </div>



            <Link to="header" smooth={true} duration={2000}>
                <div style={{ transform: `translateY(${translates}%)` }} className="icons-nav ">


                    <i class="fa-solid fa-chevron-up"></i>



                </div>
            </Link>


            <div className='parents-icons1'>
                <div className='calls1'>
                    <h5 className='m-0'>calls</h5>
                </div>
                <div className="whatsapp1">
                    <i class="fa-solid fa-phone"></i>

                </div>

            </div>
            <div className='parents-icons'>
                <div className='calls'>
                    <h5 className='m-0'>WhatsApp</h5>
                </div>
                <div className="whatsapp">
                    <i class="fa-brands fa-whatsapp"></i>

                </div>

            </div>

        </>
    )
}

export default Navbar