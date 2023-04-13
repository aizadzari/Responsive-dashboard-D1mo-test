import React, { useEffect, useState } from 'react'
import img1 from '../../img/terra1.png'
import img2 from '../../img/terra2.png'
import img3 from '../../img/terra3.png'

const Project4 = ({ prevScrollPos }) => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        const base = 812;
        const container = document.getElementById('terra');
        const selcare = document.querySelector("#selcare")
        const hajj = document.querySelector("#hajj")
        const terra = document.querySelector("#terra")
        // const ronda = document.querySelector("#ronda")

        const element = document.querySelector("#project4");
        const elementTitle = container.querySelector('.title')
        const elementDesc = container.querySelector('.desc')

        const moreThan = base + selcare.scrollHeight + hajj.scrollHeight;
        const lessThan = base + selcare.scrollHeight + hajj.scrollHeight + terra.scrollHeight + (terra.scrollHeight / 3);

        if (prevScrollPos > moreThan && prevScrollPos < lessThan) {
            element.classList.remove('animated-out-right')
            element.classList.add('animated-in-right')
            elementTitle.classList.add('animation-faded')
            elementDesc.classList.add('animation-faded')
        }
        // else if (prevScrollPos > lessThan) {
        //     element.classList.add('animated-out-right')
        //     element.classList.remove('animated-in-right')
        // } else {
        //     element.classList.add('animated-out-right')
        //     element.classList.remove('animated-in-right')
        // }
    }, [prevScrollPos])
    return (
        <div className='project-container d-flex align-items-center mb-5 py-5' id='terra'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-block">
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
                    <div className='d-flex flex-row font-monospace flex-wrap mt-4 w-100 pe-lg-5 pe-sm-0' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Vue@2</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>jsPdf</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>cryptr</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-start text-lg-end text-primary mb-1 title' style={{ transitionDelay: '100ms' }}>Featured Project | <span className='text-muted'>Aug 2021- Aug 2021</span></p>
                    <p className='text-start text-lg-end text-dark fw-bold fs-4 desc' style={{ transitionDelay: '200ms' }}>Telco Service Provider</p>

                    <div className='card-code is-right shadow rounded bg-light p-4 small' id='project4'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript and Vue@2.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a dynamic mapping feature using Mapbox technology, leveraging asset data to generate custom markers that provide critical insights into asset locations and performance metrics. The result is a more intuitive and streamlined user experience that enables effective decision-making and optimized asset management.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Developed a customized HTML and CSS layout that adheres to the standard letter format and integrated it with the jsPDF library to enable users to download the document in PDF format.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implemented a comprehensive page dashboard with advanced data visualization capabilities, utilizing Chart.js library to create interactive charts.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project4