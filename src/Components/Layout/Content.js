import React from 'react'

const Content = () => {

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aizad-zari-3b6026157/')
    }
    return (
        <React.Fragment>
            <div className='container-box position-relative my-4'>
                <div className='row h-100'>
                    <div className='col-md-7'>
                        <div className='card shadow border-0 bg-custom-1 text-white h-100'>
                            <div className='card-body p-5 '>
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
                    <div className='col-md-5 '>
                        <div className='card overflow-hidden shadow border-0 h-100'>
                            <div className='card-body p-0 '>
                                <div className='bg-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-box position-relative my-4'>
                <div className='row h-100'>
                    <div className='col-md-6'>
                        <div className='card shadow border-0 h-100'>
                            <div className='card-body p-5 '>
                                <h4>About me</h4>
                                <p>Hello there! My name is Aizad and I have a passion for crafting compelling digital experiences that thrive on the internet. My interest in web development began in 2016 when I experimented with custom website editing.</p>
                                <p>I quickly realized my love for this field and decided to pursue it further. Since then, I have been fortunate enough to work with a start-up, where I have gained valuable experience in building accessible and inclusive products for diverse clients. My primary focus now is to continue honing my skills in web development and creating exceptional digital experiences that meet the highest standards of quality and user satisfaction.</p>

                                <p>Here are a few technologies I’ve been working with recently:</p>
                                <div className='d-flex justify-content-between'>
                                    <div><i class="ri-javascript-fill ri-2x"></i></div>
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
                    <div className='col-md-6'>
                        <div className='card shadow border-0 text-white h-100'>
                            <div className='card-body p-5 '>
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default Content