import React from 'react'
// import { Link } from 'react-router-dom'
import img from "../../img/logo.png"

const Navbar = () => {
    return (
        <React.Fragment>
            <div className='d-flex justify-content-between align-items-center px-5 py-3'>
                <div className='logo-container'>
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