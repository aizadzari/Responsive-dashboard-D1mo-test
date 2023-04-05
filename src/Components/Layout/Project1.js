import React, { useState } from 'react'
import img1 from '../../img/ronda.png'
import img2 from '../../img/ronda2.png'
import img3 from '../../img/ronda3.png'

const Project1 = () => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }
    return (
        <div className='project-container d-flex align-items-center' id='ronda'>
            <div className=' row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4">
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
                                <img alt='img1' className='rounded shadow w-100' src={img2} />
                            </div>
                            <div className={img === '3' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img3} />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex font-monospace flex-wrap mt-4 w-100 pe-sm-0 pe-lg-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>cryptr</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>jsPDF</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-md-start text-lg-end text-primary mb-1'>Featured Project</p>
                    <p className='text-md-start  text-lg-end text-dark fw-bold fs-4'>Road Management System</p>

                    <div className='card-code is-right shadow rounded bg-light p-4 small'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript, and Vue@2.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed and developed user authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a dynamic mapping feature using Mapbox technology, leveraging asset data to generate custom markers that provide critical insights into asset locations and performance metrics. The result is a more intuitive and streamlined user experience that enables effective decision-making and optimized asset management.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designing a gallery page that can efficiently gather all the assets and images while maintaining fast page loading times.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed a custom map that incorporates markers based on location, using the Mapbox API to search for specific locations.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a customized HTML and CSS layout that adheres to the standard letter format and integrated it with the jsPDF library to enable users to download the document in PDF format.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1