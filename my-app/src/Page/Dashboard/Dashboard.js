import React from 'react'
import Content from './Content';
import Navigation from './Navigation';

const dashboard = (props) => {
    const handlelogout = () => {
        localStorage.removeItem("authUser");
        props.history.push('/login')
    }
    return (
        <React.Fragment>
            <Navigation handlelogout={handlelogout} />
            <Content />
        </React.Fragment>
    )
}

export default dashboard
