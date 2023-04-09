import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import img from "../../img/logo.png"

const Navbar = () => {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function (event) {
            // code to run when the page is fully loaded
            if (!event.isTrusted) return

            const element1 = document.querySelector('.animate-logo-1');

            if (element1) element1.classList.add('animation-bg-faded')
        });
    }, [])
    return (
        <React.Fragment>
            <div className='d-flex justify-content-between align-items-center px-5 py-3'>
                <div className='logo-container animate-logo-1'>
                    <img alt='logo' src={img} />
                </div>
                {/* <div className='d-flex justify-content-between align-items-center'>
                    <div className='me-4'><Link>Home</Link></div>
                    <div className='me-4'><Link>About</Link></div>
                    <div><Link>Contact</Link></div>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default Navbar