import React, { useState } from 'react'
import img1 from '../../img/selcare1.png'
import img2 from '../../img/selcare2.png'
import img3 from '../../img/selcare3.png'
import img4 from '../../img/selcare4.png'
import img5 from '../../img/selcare5.png'

const Project3 = () => {
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
                            <button type="button" onClick={() => handleImgBtn('3')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" onClick={() => handleImgBtn('4')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" onClick={() => handleImgBtn('5')} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class={img === '1' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img1} />
                            </div>
                            <div class={img === '2' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img2} />
                            </div>
                            <div class={img === '3' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img3} />
                            </div>
                            <div class={img === '4' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img4} />
                            </div>
                            <div class={img === '5' ? "carousel-item active" : "carousel-item"}>
                                <img alt='img1' className='rounded shadow w-100' src={img5} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-relative w-50'>
                    <p className='text-end text-muted mb-1'>Featured Project</p>
                    <p className='text-end text-dark fw-bold fs-4'>Web portal for GLC healthcare client for admin</p>

                    <div className='position-absolute card-code shadow rounded bg-light p-5'>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Built a website from Templete using HTML, CSS, JavaScript and Reactjs.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Designed and developed user authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Utilized Redux Redux to manage the state structure, which simplified state management, improved performance, and provided a consistent state structure.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Integrated with MSC Trustgate to enhance security and ensure compliance with regulations. This included using their API to establish a secure communication channel and implementing necessary security measures like two-factor authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Implement video call functionality. Agora.io was easy to set up and provided scalability and security features, such as end-to-end encryption and token authentication.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Utilized Socket.io to implement real-time chat and video call functionality in a project.</p></div>
                        <div className='d-flex'><i className="ri-arrow-right-s-line me-2"></i><p className='text-dark font-monospace'>Deployed the website on Netlify.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project3