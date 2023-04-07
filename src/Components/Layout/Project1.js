import React, { useEffect, useState } from 'react'
import img1 from '../../img/ronda.png'
import img2 from '../../img/ronda2.png'
import img3 from '../../img/ronda3.png'
import img4 from '../../img/ronda4.png'
import img5 from '../../img/ronda5.png'

const Project1 = ({prevScrollPos}) => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        // const element = document.querySelector("#project2");
        // if (prevScrollPos > 3000 && prevScrollPos < 4900)  {
        //     element.classList.remove('animated-out-left')
        //     element.classList.add('animated-in-left')
        // }  else if (prevScrollPos > 4900) {
        //     element.classList.remove('animated-in-left')
        //     element.classList.add('animated-out-left')
        // } else {
        //     element.classList.remove('animated-in-left')
        //     element.classList.add('animated-out-left')
        // }
    }, [prevScrollPos])
    return (
        <div className='project-container d-flex align-items-center mb-5' id='ronda'>
            <div className=' row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-block d-lg-none" style={{ zIndex: 1 }}>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" onClick={() => handleImgBtn('3')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" onClick={() => handleImgBtn('4')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" onClick={() => handleImgBtn('5')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
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
                            <div className={img === '4' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img4' className='rounded shadow w-100' src={img4} />
                            </div>
                            <div className={img === '5' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img5' className='rounded shadow w-100' src={img5} />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex font-monospace flex-row flex-wrap mt-4 w-100 ps-sm-0 ps-lg-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>cryptr</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPDF</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12' style={{ zIndex: 2 }}>
                    <p className='text-end text-lg-start text-primary mb-1'> Featured Project | <span className='text-muted'>Jun 2021 - Dec 2021</span></p>
                    <p className='text-end text-lg-start text-dark fw-bold mb-1 fs-4'>Develop and Mantain Road Management System</p>

                    <div className='card-code is-left shadow rounded bg-light p-4 small' id='project2'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript, and Vue@2.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a dedicated page for managing users that can only be accessed by the superadmin. The webpage will allow the superadmin to easily create, edit, and delete user accounts, manage passwords, and see important data. To keep data secure, the webpage will have multiple security measures like passwords and encryption. This will help the superadmin manage user accounts more efficiently and have better control over user permissions.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a dynamic mapping feature using Mapbox technology, leveraging asset data to generate custom markers that provide critical insights into asset locations and performance metrics. The result is a more intuitive and streamlined user experience that enables effective decision-making and optimized asset management.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designing a gallery page that can efficiently gather all the assets and images while maintaining fast page loading times.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed a custom map that incorporates markers based on location, using the Mapbox API to search for specific locations.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a customized HTML and CSS layout that adheres to the standard letter format and integrated it with the jsPDF library to enable users to download the document in PDF format.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-none d-lg-block" style={{ zIndex: 1 }}>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" onClick={() => handleImgBtn('3')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" onClick={() => handleImgBtn('4')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" onClick={() => handleImgBtn('5')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
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
                            <div className={img === '4' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img4' className='rounded shadow w-100' src={img4} />
                            </div>
                            <div className={img === '5' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img5' className='rounded shadow w-100' src={img5} />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex font-monospace flex-row-reverse flex-wrap mt-4 w-100 ps-sm-0 ps-lg-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>cryptr</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPDF</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1