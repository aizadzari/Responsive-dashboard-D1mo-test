import React, { useEffect, useState } from 'react'
import img1 from '../../img/selcare1.png'
import img2 from '../../img/selcare2.png'
import img3 from '../../img/selcare3.png'
import img4 from '../../img/selcare4.png'
import img5 from '../../img/selcare5.png'

const Project3 = ({ prevScrollPos }) => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        const base = 215;
        const selcare = document.querySelector("#selcare")
        const hajj = document.querySelector("#hajj")

        const element = document.querySelector("#project3");



        const moreThan = base + selcare.scrollHeight + (hajj.scrollHeight / 3);
        const lessThan = base + selcare.scrollHeight + hajj.scrollHeight + (hajj.scrollHeight / 3);

        if (prevScrollPos > moreThan && prevScrollPos < lessThan) {
            element.classList.remove('animated-out-right')
            element.classList.add('animated-in-right')
        }
        //  else if (prevScrollPos > lessThan) {
        //     element.classList.add('animated-out-right')
        //     element.classList.remove('animated-in-right')
        // } else {
        //     element.classList.add('animated-out-right')
        //     element.classList.remove('animated-in-right')
        // }
    }, [prevScrollPos])
    return (
        <div className='project-container d-flex align-items-center mb-5 py-5' id='selcare'>
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

                    <div className='d-flex font-monospace flex-wrap mt-4 w-100 pe-sm-0 pe-5' style={{ paddingRight: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>React</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Redux</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>MSC Trustgate</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Agora.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Socket.io</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>cryptr</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPDF</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Chartjs</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-start text-lg-end text-primary mb-1'>Featured Project | <span className='text-muted'>Dec 2021 - Present</span></p>
                    <p className='text-start text-lg-end text-dark fw-bold fs-4'>Develop and Mantain Webite for GLC healthcare</p>

                    <div className='card-code is-right shadow rounded bg-light p-4 small' id='project3'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from Templete using HTML, CSS, JavaScript and Reactjs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed and developed secure user authentication industry-standard encryption algorithms and best practices to ensure data privacy and protect against unauthorized access.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Utilized Redux to manage the state structure, which simplified state management, improved performance, and provided a consistent state structure.</p></div>
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