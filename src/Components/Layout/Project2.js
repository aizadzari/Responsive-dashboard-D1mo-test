import React, { useEffect, useState, useRef } from 'react'
import img1 from '../../img/inference1.png'
import img2 from '../../img/inference2.png'

const Project2 = () => {
    const [img, setImg] = useState('1')
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)

    const handleImgBtn = (key) => {
        setImg(key)
    }

    useEffect(() => {
        const container = containerRef.current
        const card = cardRef.current
        const title = titleRef.current
        const desc = descRef.current

        if (!container || !card || !title || !desc) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        card.classList.remove('animated-out-right')
                        card.classList.add('animated-in-right')
                        title.classList.add('animation-faded')
                        desc.classList.add('animation-faded')
                    } else {
                        card.classList.add('animated-out-right')
                        card.classList.remove('animated-in-right')
                        title.classList.remove('animation-faded')
                        desc.classList.remove('animation-faded')
                    }
                })
            },
            {
                threshold: 0.3,
                rootMargin: '-10% 0px -10% 0px'
            }
        )

        observer.observe(container)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className='project-container d-flex align-items-center py-5' id='inference' ref={containerRef}>
            <div className='row'>
                <div className="position-relative col-lg-6 col-md-12 overflow-hidden rounded mb-4">
                    <div id="carouselExampleCaptions" className="carousel slide shadow border border-white rounded overflow-hidden" data-bs-ride="carousel">
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
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Html</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Css</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>JavaScript</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Mapbox</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Chartjs</div>
                        <div className='px-3 py-1 mb-2 border border-secondary rounded-pill me-2 text-secondary fs-10 d-flex align-items-center'>Bootstrap</div>
                    </div>
                </div>
                <div className='position-relative col-lg-6 col-md-12'>
                    <p className='text-start text-lg-end text-primary mb-1 title' ref={titleRef} style={{ transitionDelay: '100ms' }}>Featured Project | <span className='text-muted'>Jun 2021 - Jun 2021</span></p>
                    <p className='text-start text-lg-end text-dark fw-bold fs-4 desc' ref={descRef} style={{ transitionDelay: '200ms' }}>Develop and Mantain Company Website</p>

                    <div className='card-code is-right shadow rounded bg-light p-4 small' id='project2' ref={cardRef}>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS and JavaScript.</p></div>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Designed a custom UI layout using the versatile Bootstrap framework.</p></div>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Integrated Mapbox API into the application, including the placement of a custom marker at the organization's headquarters.</p></div>
                        <div className='d-flex'><i className="ri-terminal-line me-2 text-primary fw-bold"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project2
