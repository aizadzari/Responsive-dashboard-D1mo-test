import React, { useState } from 'react'
import img1 from '../../img/inference1.png'
import img2 from '../../img/inference2.png'

const Project2 = () => {
    const [img, setImg] = useState('1')
    const handleImgBtn = (key) => {
        setImg(key)
    }
    return (
        <div className='project-container d-flex align-items-center'>
            <div className='d-flex justify-content-between'>
                <div className="position-relative w-50 overflow-hidden rounded">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" onClick={() => handleImgBtn('1')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" onClick={() => handleImgBtn('2')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div class={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-relative w-50'>
                    <p className='text-end text-muted mb-1'>Featured Project</p>
                    <p className='text-end text-dark fw-bold fs-4'>Company website</p>

                    <div className='position-absolute card-code shadow rounded bg-light p-5'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from scratch using HTML, CSS and JavaScript.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project2