import React, { useEffect, useState } from 'react'
import img1 from '../../img/delyva1.png'
import img2 from '../../img/delyva2.png'
import img3 from '../../img/delyva3.png'

const Project6 = ({ prevScrollPos }) => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        const base = 215;
        const selcare = document.querySelector("#selcare")
        const hajj = document.querySelector("#hajj")
        const terra = document.querySelector("#terra")
        const ronda = document.querySelector("#ronda")
        const inference = document.querySelector("#inference")
        const delyva = document.querySelector("#delyva")

        const element = document.querySelector("#project6");


        const moreThan = base + selcare.scrollHeight + hajj.scrollHeight + terra.scrollHeight + ronda.scrollHeight + inference.scrollHeight + delyva.scrollHeight

        if (prevScrollPos > moreThan) {
            element.classList.remove('animated-out-left')
            element.classList.add('animated-in-left')
        } else {
            element.classList.add('animated-out-left')
            element.classList.remove('animated-in-right')
        }
    }, [prevScrollPos])
    return (
        <div className='project-container d-flex align-items-center mb-5' id='delyva'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-block d-lg-none">
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

                    <div className='d-flex font-monospace flex-wrap mt-4 w-100 pe-sm-0 pe-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>React</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Redux</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Ant Design</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPDF</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Chartjs</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12' style={{ zIndex: 2 }}>
                    <p className='text-start text-primary mb-1'>Featured Project | <span className='text-muted'>Sep 2019 - May 2021</span></p>
                    <p className='text-start text-dark fw-bold fs-4'>Delyva Now</p>

                    <div className='card-code is-left shadow rounded bg-light p-4 small' id='project6'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript and Reactjs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Created a web application from scratch, utilizing my expertise in custom layout design and the Ant Design framework. By working closely with the designer, I created a user-friendly, visually appealing interface that met their specific needs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Created an order page that includes an interactive map to help end-users visualize and navigate their location and set their delivery point. By leveraging Mapbox technology, users can easily identify their location on the map and set the delivery point accurately. The map is also used to calculate the distance, which in turn is used to calculate the cost of deliveries based on courier service rates.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a custom feature that allows users to create their own consignment labels with ease. This feature provides users with the ability to fully customize their labels, ensuring that each one meets their specific needs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implemented a 3rd party library to handle bulk orders and developed a custom feature to read the uploaded files. This feature allows users to upload large order files with ease and improves the efficiency of the order fulfillment process.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Integrated Stripe as the payment gateway to enable a seamless payment process for customers. Users can securely complete their transactions directly on the platform.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a custom dashboard page that allows end-users to view their overall spending, order history, order status, and shipment status. This feature provides users with an easy-to-use interface that enables them to quickly access important information about their account.</p></div>
                    </div>
                </div>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-none d-lg-block">
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

                    <div className='d-flex font-monospace flex-wrap mt-4 w-100 pe-sm-0 pe-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>React</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Redux</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Ant Design</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPDF</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Chartjs</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project6