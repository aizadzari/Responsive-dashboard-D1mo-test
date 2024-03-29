import React, { useEffect, useState } from 'react'
import img1 from '../../img/th1.png'
import img2 from '../../img/th2.png'

const Project5 = ({ prevScrollPos }) => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        const base = 1212;
        const selcare = document.querySelector("#selcare")
        const hajj = document.querySelector("#hajj")
        const terra = document.querySelector("#terra")

        const container = document.getElementById('hajj');
        const element = document.querySelector("#project5");
        const elementTitle = container.querySelector('.title')
        const elementDesc = container.querySelector('.desc')


        const moreThan = base + selcare.scrollHeight;
        const lessThan = base + selcare.scrollHeight + hajj.scrollHeight + terra.scrollHeight + (terra.scrollHeight / 3);

        if (prevScrollPos > moreThan && prevScrollPos < lessThan) {
            element.classList.remove('animated-out-left')
            element.classList.add('animated-in-left')
            elementTitle.classList.add('animation-faded')
            elementDesc.classList.add('animation-faded')
        }
    }, [prevScrollPos])
    return (
        <div className='project-container d-flex align-items-center mb-5 py-5' id='hajj'>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-block d-lg-none" style={{ zIndex: 1 }}>
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
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Vue@3</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>JavaScript</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12' style={{ zIndex: 2 }}>
                    <p className='text-start  text-primary mb-1 title' style={{ transitionDelay: '100ms' }}>Featured Project | <span className='text-muted'>Sep 2022 - Sep 2022</span></p>
                    <p className='text-start  text-dark fw-bold fs-4 desc' style={{ transitionDelay: '100ms' }}>Develop Website for hajj pilgrims organization</p>

                    <div className='card-code is-left shadow rounded bg-light p-4 small' id='project5'>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS, JavaScript and Vue@3.</p></div>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Designed and developed the user interface (UI) for the Hajj application,responsive web development techniques to ensure seamless user experience across a range of devices and screen sizes.</p></div>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4 d-none d-lg-block" style={{ zIndex: 1 }}>
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
                    <div className='d-flex font-monospace flex-row-reverse flex-wrap mt-4 w-100 ps-sm-0 ps-lg-5' style={{ paddingLeft: "50px !important" }}>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Vue@3</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Scss</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>JavaScript</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project5