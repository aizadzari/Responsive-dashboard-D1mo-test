import React, { useEffect, useState, useRef, useCallback } from 'react'
import img1 from "../../img/inference-logo.jpeg"
import img2 from "../../img/delyva-logo.jpeg"
import img3 from "../../img/AD-logo.jpeg"
import img4 from "../../img/iridea-logo.png"
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'

const Content = () => {
    const [menu, setMenu] = useState('1')
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    // Refs for animated background elements
    const bgRefs = useRef([])
    // Refs for animated box elements
    const boxRefs = useRef([])
    // Ref for the divider element (animate-box-9)
    const dividerRef = useRef(null)

    // Initial animation on mount
    useEffect(() => {
        // Add animation classes to background elements
        bgRefs.current.forEach((ref) => {
            if (ref) ref.classList.add('animation-bg-faded')
        })

        // Add animation classes to box elements
        boxRefs.current.forEach((ref) => {
            if (ref) ref.classList.add('animation-faded')
        })
    }, [])

    // Scroll handler
    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setPrevScrollPos(currentScrollPos);
    }, [])

    // Set up scroll listener (only once)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Handle scroll-based animation for divider
    useEffect(() => {
        if (prevScrollPos > 1000 && dividerRef.current) {
            dividerRef.current.classList.add('animation-faded')
        }
    }, [prevScrollPos]);

    const handleLinkedIn = useCallback(() => {
        window.open('https://www.linkedin.com/in/aizad-zari-3b6026157/')
    }, [])

    const handleGithub = useCallback(() => {
        window.open('https://github.com/aizadzari')
    }, [])

    const handleMenu = useCallback((key) => {
        setMenu(key)
    }, [])

    const handleViewProject = useCallback((key) => {
        setTimeout(() => {
            const targetElement = document.getElementById(key);
            if (!targetElement) return;
            targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        }, 100);
    }, [])

    // Helper to assign refs to arrays
    const setBgRef = (index) => (el) => {
        bgRefs.current[index] = el
    }

    const setBoxRef = (index) => (el) => {
        boxRefs.current[index] = el
    }

    return (
        <React.Fragment>
            <div className='pb-lg-5 content-animated'>
                <div>
                    <div className='container-box position-relative my-2 overflow-hidden' >
                        <div className='row'>
                            <div className='col-md-8 mb-3 col-sm-12 animate-bg-1' ref={setBgRef(0)}>
                                <div className='card shadow border-0 bg-custom-1 text-white h-100'>
                                    <div className='card-body p-5'>
                                        <h1 className='animate-box-1 fw-bold' ref={setBoxRef(0)} style={{ transitionDelay: "300ms" }}>Hey, I'm Aizad,</h1>
                                        <h1 className='animate-box-2 fw-bold' ref={setBoxRef(1)} style={{ transitionDelay: "400ms" }}>a <span className='text-secondary'>Frontend Developer</span> with <span className='text-secondary'>7+ years</span> <br /> of experience</h1>

                                        {/* <p className='small mt-4 animate-box-3' ref={setBoxRef(2)} style={{ transitionDelay: "500ms" }}>As an experienced frontend developer, I possess a diverse and promising skillset that enables me to bring forth expertise in designing, developing, and maintaining software systems.</p> */}
<p className='small mt-4 animate-box-3' ref={setBoxRef(2)} style={{ transitionDelay: "500ms" }}>Experience designing and building scalable web applications, digital
platforms, and user-centered interfaces. Proven expertise in frontend and backend development, UI/UX design,
and digital transformation projects. Skilled in translating complex requirements into intuitive, accessible, and
visually compelling applications for diverse industries including healthcare, logistics, oil & gas, and government
sectors.</p>
                                        <div className='mt-5 bottom-1 left-1'>
                                            <button className='btn btn-light rounded-pill me-2' onClick={handleLinkedIn}><i className="ri-linkedin-fill align-middle"></i></button>
                                            <button className='btn btn-light rounded-pill' onClick={handleGithub}><i className="ri-github-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-3 d-block d-md-block d-lg-block d-sm-none animate-bg-2' ref={setBgRef(1)}>
                                <div className='card overflow-hidden shadow border-0 h-100 '>
                                    <div className='card-body p-0'>
                                        <div className='bg-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-box position-relative my-2'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-12 mb-3 animate-bg-3' ref={setBgRef(2)} style={{ transitionDelay: '500ms' }}>
                                <div className='card shadow border-0 '>
                                    <div className='card-body p-5' id='about-me'>
                                        <h4 className='mb-4 animate-box-4 fw-bold' ref={setBoxRef(3)} style={{ transitionDelay: '700ms' }}>About me</h4>
                                        <p className='small animate-box-5' ref={setBoxRef(4)} style={{ transitionDelay: '800ms' }}>Hello there! My name is Aizad and I have a passion for crafting compelling digital experiences that thrive on the internet. My interest in web development began in 2016 when I had the opportunity to experiment with building a custom website using HTML, CSS, and JavaScript. This allowed me to gain a deeper understanding of web development and improve my skills in these technologies.</p>
                                        <p className='small animate-box-6' ref={setBoxRef(5)} style={{ transitionDelay: '900ms' }}>I quickly realized my love for this field and decided to pursue it further. Since then, I have been fortunate enough to work with a start-up, where I have gained valuable experience in building accessible and inclusive products for diverse clients.</p>
                                        {/* <p className='small animate-box-10' ref={setBoxRef(6)} style={{ transitionDelay: '1000ms' }}>My primary focus now is to expand my knowledge and expertise in the realm of Web 3.0 technology. This involves delving deeper into the underlying concepts, protocols, and applications that comprise the decentralized web ecosystem. It is important to stay abreast of the latest developments in Web 3.0 and to continue building my skills and understanding of this exciting new frontier in technology</p> */}
                                        <p className='small animate-box-11' ref={setBoxRef(7)} style={{ transitionDelay: '1100ms' }}>Here are a few technologies I've been working with recently:</p>

                                        <div className='d-flex justify-content-evenly flex-md-wrap animate-box-8' ref={setBoxRef(8)} style={{ transitionDelay: '1100ms' }}>
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
                            <div className='col-lg-7 col-md-12 mb-3 animate-bg-4' ref={setBgRef(3)} style={{ transitionDelay: '600ms' }}>
                                <div className='card shadow border-0 h-100 '>
                                    <div className='card-body p-5'>
                                        <h4 className='mb-2 fw-bold'>Experience</h4>

                                        <div className='d-flex flex-column'>
                                            <div className='w-100 mb-4 overflow-scroll'>
                                                <ul className="list-group list-group-horizontal">
                                                    <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-1 border-end-0 border-start-0 px-0 me-4 ${menu === '1' ? ' border-primary text-primary' : 'border-light text-muted'}  rounded-0`} onClick={() => handleMenu('1')}>Inference</li>
                                                    <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-1 border-end-0 border-start-0 px-0 me-4 ${menu === '2' ? ' border-primary text-primary' : 'border-light text-muted'}  rounded-0`} onClick={() => handleMenu('2')}>Delyva</li>
                                                    <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-1 border-end-0 border-start-0 px-0 me-4 ${menu === '3' ? ' border-primary text-primary' : 'border-light text-muted'} rounded-0`} onClick={() => handleMenu('3')}>Aerodyne</li>
                                                    <li style={{ cursor: 'pointer' }} className={`list-group-item border-top-0 border-bottom-1 border-end-0 border-start-0 px-0 me-4 ${menu === '4' ? ' border-primary text-primary' : 'border-light text-muted'}  rounded-0`} onClick={() => handleMenu('4')}>Iridea</li>
                                                </ul>
                                            </div>

                                            {menu === '1' ? <div className='w-100'>
                                                <div className='d-flex mb-3'>
                                                    <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img1} className="w-100" alt="Inference logo" /></div>
                                                    <div>
                                                        <h6 className='fw-bold mb-1'>Web Developer</h6>
                                                        <p className='small text-muted'>Jun 2021 - Present</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2 small'>Web portal for GLC healthcare client for admin (doctor, pharmacist, participants clinics) and users to carry out telemedicine services that include consultation and prescription services.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('selcare')}>View project</button></div></div></div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='small'>Build a web application for hajj pilgrims organization for their hajj participant preparation before perform pilgrimage, that include ebook for reference and examination to verify their readiness before perform the worship.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('hajj')}>View project</button></div></div></div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='small'>Build a dashboard using JavaScript for telco service provider to monitor their project progress that can filter by region and site inventory.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('terra')}>View project</button></div></div></div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2 small'>Develop web portal for Malaysian government sector client to manage and monitor real time-based road defect (loophole, faded landmarking) and analyse it using AI technology.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('ronda')}>View project</button></div></div></div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='mb-2 small'>Develop web company website for Inference Tech .Sdn .Bhd. Easy to navigate, and provided a seamless user experience. while also ensuring that the website met industry standards and best practices</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('inference')}>View project</button></div></div></div>
                                            </div> : null}

                                            {menu === '2' ? <div className='w-100'>
                                                <div className='d-flex mb-3'>
                                                    <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img2} className="w-100" alt="Delyva logo" /></div>
                                                    <div>
                                                        <h6 className='fw-bold mb-1'>Frontend Developer</h6>
                                                        <p className='small text-muted'>Sep 2019 - May 2021</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3'><div className='d-flex'><i className="ri-arrow-right-line me-2"></i><div><p className='small'>Played a key role in the development of a SAAS project that included the creation of revenue and sales monitoring dashboards, tracking orders and shipments, and customizing air waybills for courier service providers. This project required expertise in designing and implementing complex data visualization tools, integrating various APIs and technologies, and building secure and scalable web applications. The revenue and sales dashboard enabled clients to track and analyze their business metrics, while the order and shipment tracking feature streamlined logistics processes. Additionally, the air waybill customization allowed clients to brand their shipment documents and improve customer experience. Overall, this project helped clients optimize their operations and achieve better business outcomes.</p><button className='btn btn-outline-dark rounded-pill btn-sm' onClick={() => handleViewProject('delyva')}>View project</button></div></div></div>
                                            </div> : null}

                                            {menu === '3' ? <div className='w-100'>
                                                <div className='d-flex mb-3'>
                                                    <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img3} className=" w-100" alt="Aerodyne logo" /></div>
                                                    <div>
                                                        <h6 className='fw-bold mb-1'>Frontend Developer</h6>
                                                        <p className='small text-muted'>Aug 2018 - Sep 2019</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p className='small'>Design and maintain a secure web portal for an oil and gas company that manages work records, application requests, and digitizes paperwork. The portal will provide a user-friendly interface that streamlines the process of managing employee records, work applications, and other essential documents. Robust security measures will be implemented to ensure the confidentiality and integrity of the data stored within the portal. Regular maintenance and updates will also be carried out to ensure the portal's smooth operation.</p></div>
                                            </div> : null}

                                            {menu === '4' ? <div className='w-100'>
                                                <div className='d-flex mb-3'>
                                                    <div className='shadow-sm rounded d-flex align-items-center overflow-hidden me-3' style={{ width: 50, height: 50 }}><img src={img4} className="w-100" alt="Iridea logo" /></div>
                                                    <div>
                                                        <h6 className='fw-bold mb-1'>Graphic Designer</h6>
                                                        <p className='small text-muted'>Jan 2017 - Aug 2018</p>
                                                    </div>
                                                </div>
                                                <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p className='small'>Created several mockups and storyboards for the "Finding Your Own Chef" application. The mockups included designs for the user interface, user experience, and overall branding of the application. The storyboards demonstrated how users would interact with the application, and showcased how the different features would work together. The goal was to create a user-friendly and visually appealing application that allowed users to easily find and book a private chef for their special events. By incorporating feedback from stakeholders and utilizing the latest design trends, I ensured that the final product would meet user needs and exceed expectations.</p></div>
                                                <div className='d-flex'><i className="ri-arrow-right-line me-2"></i><p className='small'>Created a variety of design assets for businesses, including business cards, letterheads, banners, ads, infographics, video animation and logos.</p></div>
                                            </div> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='divider-text animate-box-9' ref={dividerRef} style={{ transitionDelay: '100ms' }}>
                    <h1 className='fw-bolder'>Some Things I've Built</h1>
                    <div className='line' />
                </div>

                <div className='container-box position-relative my-5' style={{ transitionDelay: '200ms' }}>
                    <Project3 />
                    <Project5 />
                    <Project4 />
                    <Project1 />
                    <Project2 />
                    <Project6 />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Content
