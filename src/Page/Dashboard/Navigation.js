import { Button, Typography } from '@material-ui/core'
import React from 'react'

const navigationStyles = {
    alignItems: "center",
    height: 48,
    backgroundColor: "#ffffff",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 14px",
}

const titleStyles = {
    color: "#f2f2f2",
    margin: 0
}

const Navigation = ({ handlelogout }) => {
    return (
        <React.Fragment>
            <div style={navigationStyles}>
                <Typography style={titleStyles} component="div" key='h4' variant='h4'>LOGO</Typography>
                <Button onClick={handlelogout}>Logout</Button>
            </div>
        </React.Fragment>
    )
}

export default Navigation
