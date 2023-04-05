import moment from 'moment'
import React, { useState } from 'react'
import img1 from '../../img/th1.png'
import img2 from '../../img/th2.png'

const Project5 = () => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }
    return (
        <div className='project-container d-flex align-items-center mb-sm-5' id='hajj'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-sm-block d-lg-none">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div className={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img2} />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex font-monospace flex-row flex-wrap mt-4 w-100 pe-sm-0 pe-lg-5' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Vue@3</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>JavaScript</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-end text-primary mb-1'>Featured Project | <span className='text-muted'>{moment('2022-9-1').format('MMM YYYY')} - {moment('2022-9-1').format('MMM YYYY')}</span></p>
                    <p className='text-end text-dark fw-bold fs-4'>Develop Website for hajj pilgrims organization</p>

                    <div className='card-code is-left shadow rounded bg-light p-4 small'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript and Vue@3.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed and developed the user interface (UI) for the Hajj application,responsive web development techniques to ensure seamless user experience across a range of devices and screen sizes.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-sm-none d-lg-block">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div className={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img2} />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex font-monospace flex-row flex-wrap mt-4 w-100 pe-sm-0 pe-lg-5' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Vue@3</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>JavaScript</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project5