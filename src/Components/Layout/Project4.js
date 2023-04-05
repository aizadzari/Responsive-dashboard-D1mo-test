import moment from 'moment'
import React, { useState } from 'react'
import img1 from '../../img/terra1.png'
import img2 from '../../img/terra2.png'
import img3 from '../../img/terra3.png'

const Project4 = () => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }
    return (
        <div className='project-container d-flex align-items-center mb-sm-5' id='terra'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-sm-block d-lg-none">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" onClick={() => handleImgBtn('3')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div className={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img2' className='rounded shadow w-100' src={img2} />
                            </div>
                            <div className={img === '3' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img3' className='rounded shadow w-100' src={img3} />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row-reverse font-monospace flex-wrap mt-4 w-100 ps-lg-5 ps-sm-0' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>jsPdf</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>cryptr</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-start text-primary mb-1'>Featured Project | <span className='text-muted'>{moment('2021-8-1').format('MMM YYYY')} - {moment('2021-8-1').format('MMM YYYY')}</span></p>
                    <p className='text-start text-dark fw-bold fs-4'>Telco Service Provider</p>

                    <div className='card-code is-left shadow rounded bg-light p-4 small'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript and Vue@2.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a dynamic mapping feature using Mapbox technology, leveraging asset data to generate custom markers that provide critical insights into asset locations and performance metrics. The result is a more intuitive and streamlined user experience that enables effective decision-making and optimized asset management.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a customized HTML and CSS layout that adheres to the standard letter format and integrated it with the jsPDF library to enable users to download the document in PDF format.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implemented a comprehensive page dashboard with advanced data visualization capabilities, utilizing Chart.js library to create interactive charts.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-sm-none d-lg-block">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" onClick={() => handleImgBtn('3')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div className={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img2' className='rounded shadow w-100' src={img2} />
                            </div>
                            <div className={img === '3' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img3' className='rounded shadow w-100' src={img3} />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row-reverse font-monospace flex-wrap mt-4 w-100 ps-lg-5 ps-sm-0' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>jsPdf</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>cryptr</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project4