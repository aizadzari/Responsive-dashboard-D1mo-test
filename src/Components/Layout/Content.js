import moment from 'moment'
import React, { useState } from 'react'
import img1 from "../../img/inference-logo.jpeg"
import img2 from "../../img/delyva-logo.jpeg"
import img3 from "../../img/AD-logo.jpeg"
import img4 from "../../img/iridea-logo.png"
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

const Content = () => {
    const [menu, setMenu] = useState('1')
    const [project, setProject] = useState('ronda')

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aizad-zari-3b6026157/')
    }

    const handleMenu = (key) => {
        setMenu(key)
    }
    return (
        <React.Fragment>
            <div className='mb-5'>
                <div className='container-box position-relative my-2'>
                    <div className='row h-100'>
                        <div className='col-md-7 mb-3 col-sm-12'>
                            <div className='card shadow border-0 bg-custom-1 text-white h-100'>
                                <div className='card-body p-5'>
                                    <h1>Hey, I'm Aizad,</h1>
                                    <h2>a Frontend Developer with 5 years of experience</h2>

                                    <p className='small mt-4'>As an experienced software developer, I possess a diverse and promising skillset that enables me to bring forth expertise in designing, developing, and maintaining software systems.</p>

                                    <div className='mt-5 bottom-1 left-1'>
                                        <button className='btn btn-dark rounded-pill me-2'>Contact me</button>
                                        <button className='btn btn-light rounded-pill' onClick={handleLinkedIn}><i className="ri-linkedin-fill align-middle"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 mb-3 d-block d-md-block d-lg-block d-sm-none'>
                            <div className='card overflow-hidden shadow border-0 h-100 '>
                                <div className='card-body p-0'>
                                    <div className='bg-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-box position-relative my-2'>
                    <div className='row h-100 '>
                        <div className='col-md-5 mb-3'>
                            <div className='card shadow border-0 '>
                                <div className='card-body p-5'>
                                    <h4 className='mb-4'>About me</h4>
                                    <p>Hello there! My name is Aizad and I have a passion for crafting compelling digital experiences that thrive on the internet. My interest in web development began in 2016 when I experimented with custom website editing.</p>
                                    <p>I quickly realized my love for this field and decided to pursue it further. Since then, I have been fortunate enough to work with a start-up, where I have gained valuable experience in building accessible and inclusive products for diverse clients. My primary focus now is to continue honing my skills in web development and creating exceptional digital experiences that meet the highest standards of quality and user satisfaction.</p>
                                    <p className='mb-4'>Here are a few technologies I’ve been working with recently:</p>

                                    <div className='d-flex justify-content-between'>
                                        <div><i className="ri-javascript-fill ri-2x"></i></div>
                                        <div><i className="ri-css3-fill ri-2x"></i></div>
                                        <div><i className="ri-reactjs-fill ri-2x"></i></div>
                                        <div><i className="ri-vuejs-fill ri-2x"></i></div>
                                        <div><i className="ri-github-fill ri-2x"></i></div>
                                        <div><i className="ri-gitlab-fill ri-2x"></i></div>
                                        <div><i className="ri-html5-fill ri-2x"></i></div>
                                        <div><i className="ri-bootstrap-fill ri-2x"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 mb-3'>
                            <div className='card shadow border-0 h-100 '>
                                <div className='card-body p-5'>
                                    <h4 className='mb-4'>Experience</h4>

                                    <div className='d-flex justify-content-between'>
                                        <div className='w-25'>
                                            <ul className="list-group">
                                                <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-0 border-end-0 ${menu === '1' ? 'border-start-1 border-primary' : 'border-start-0 text-muted'} rounded-0`} onClick={() => handleMenu('1')}>Inference Tech</li>
                                                <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-0 border-end-0 ${menu === '2' ? 'border-start-2 border-primary' : 'border-start-0 text-muted'} rounded-0`} onClick={() => handleMenu('2')}>Delyva</li>
                                                <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-0 border-end-0 ${menu === '3' ? 'border-start-2 border-primary' : 'border-start-0 text-muted'} rounded-0`} onClick={() => handleMenu('3')}>Aerodyne</li>
                                                <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-0 border-end-0 ${menu === '4' ? 'border-start-2 border-primary' : 'border-start-0 text-muted'} rounded-0`} onClick={() => handleMenu('4')}>Iridea</li>
                                            </ul>
                                        </div>

                                        {menu === '1' ? <div className='w-75'>
                                            <div className='d-flex mb-3'>
                                                <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img1} className="w-100" alt="img1" /></div>
                                                <div>
                                                    <h6 className='fw-bold mb-1'>Web Developer</h6>
                                                    <p className='small text-muted'>{moment('06-01-2021').format('MMM YYYY')} - Present</p>
                                                </div>
                                            </div>
                                            <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2'>Develop web company website for Inference Tech .Sdn .Bhd. Easy to navigate, and provided a seamless user experience. while also ensuring that the website met industry standards and best practices</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => setProject('inference')}>View project</button></div></div></div>
                                            <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2'>Develop web portal for Malaysian government sector client to manage and monitor real time-based road defect (loophole, faded landmarking) and analyse it using AI technology.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => setProject('ronda')}>View project</button></div></div></div>
                                            <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2'>Web portal for GLC healthcare client for admin (doctor, pharmacist, participants clinics) and users to carry out telemedicine services that include consultation and prescription services.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => setProject('selcare')}>View project</button></div></div></div>
                                           
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Build a dashboard using JavaScript for telco service provider to monitor their project progress that can filter by region and site inventory.</p></div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Build a web application for hajj pilgrims organization for their hajj participant preparation before perform pilgrimage, that include ebook for reference and examination to verify their readiness before perform the worship.</p></div>
                                        </div> : null}

                                        {menu === '2' ? <div className='w-75'>
                                            <div className='d-flex mb-3'>
                                                <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img2} className="w-100" alt="img1" /></div>
                                                <div>
                                                    <h6 className='fw-bold mb-1'>Frontend Developer</h6>
                                                    <p className='small text-muted'>{moment('06-01-2021').format('MMM YYYY')} - {moment('06-01-2021').format('MMM YYYY')}</p>
                                                </div>
                                            </div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Involves in building SAAS project that involved monitoring revenue & sales dashboard, tracking order and shipment as well as customizing air waybill for currier service provider.</p></div>
                                        </div> : null}

                                        {menu === '3' ? <div className='w-75'>
                                            <div className='d-flex mb-3'>
                                                <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img3} className=" w-100" alt="img1" /></div>
                                                <div>
                                                    <h6 className='fw-bold mb-1'>Frontend Developer</h6>
                                                    <p className='small text-muted'>{moment('06-01-2021').format('MMM YYYY')} - {moment('06-01-2021').format('MMM YYYY')}</p>
                                                </div>
                                            </div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Build landing page for this DT3(Drone, Data, Digital) company portal that include company information (company background, contact us , organization chart.</p></div>
                                        </div> : null}

                                        {menu === '4' ? <div className='w-75'>
                                            <div className='d-flex mb-3'>
                                                <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img4} className="w-100" alt="img1" /></div>
                                                <div>
                                                    <h6 className='fw-bold mb-1'>UI Designer</h6>
                                                    <p className='small text-muted'>{moment('06-01-2021').format('MMM YYYY')} - {moment('06-01-2021').format('MMM YYYY')}</p>
                                                </div>
                                            </div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Ensured that the visions of the director and designer were carried out through production.</p></div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Offered design solutions that effectively solved problems and enhanced advertising goals.</p></div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Assisted with a wide range of design projects and met tight deadlines.</p></div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Assisted in the creation of graphic materials for the use of the marketing department.</p></div>
                                            <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p>Delivered visually compelling animation and graphic elements</p></div>
                                        </div> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {project ? <div className='container-box position-relative my-5'>
                    {project === 'ronda' ? <Project1 /> : null}
                    {project === 'inference' ? <Project2 /> : null}
                    {project === 'selcare' ? <Project3 /> : null}
                </div> : null}
            </div>
        </React.Fragment>
    )
}

export default Content