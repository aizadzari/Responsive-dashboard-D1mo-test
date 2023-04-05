import React, { useState } from 'react'
import img1 from '../../img/selcare1.png'
import img2 from '../../img/selcare2.png'
import img3 from '../../img/selcare3.png'
import img4 from '../../img/selcare4.png'
import img5 from '../../img/selcare5.png'
import moment from 'moment'

const Project3 = () => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }
    return (
        <div className='project-container d-flex align-items-center mb-sm-5' id='selcare'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4">
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
                                <img alt='img5s' className='rounded shadow w-100' src={img5} />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex font-monospace flex-wrap mt-4 w-100 pe-sm-0 pe-lg-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>React</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Redux</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>MSC Trustgate</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Agora.io</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>cryptr</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>jsPDF</div>
                        <div className='px-3 py-1 mb-2 border border-primary rounded-pill me-2 text-primary'>Chartjs</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-end text-primary mb-1'>Featured Project | <span className='text-muted'>{moment('2021-12-1').format('MMM YYYY')} - Present</span></p>
                    <p className='text-end text-dark fw-bold fs-4'>Develop and Mantain Webite for GLC healthcare</p>

                    <div className='card-code is-right shadow rounded bg-light p-4 small'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from Templete using HTML, CSS, JavaScript and Reactjs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed and developed secure user authentication industry-standard encryption algorithms and best practices to ensure data privacy and protect against unauthorized access.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Utilized Redux Redux to manage the state structure, which simplified state management, improved performance, and provided a consistent state structure.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Integrated with MSC Trustgate to enhance security and ensure compliance with regulations. This included using their API to establish a secure communication channel and implementing necessary security measures like two-factor authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implement video call functionality. Agora.io was easy to set up and provided scalability and security features, such as end-to-end encryption and token authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Utilized Socket.io to implement real-time chat functionality.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implemented a comprehensive page dashboard with advanced data visualization capabilities, utilizing Chart.js library to create interactive charts.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project3