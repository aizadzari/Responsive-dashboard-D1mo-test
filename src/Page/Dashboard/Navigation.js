import React from 'react'
import { API_ROOT } from "../Store/Helpers/Helpers"
import { Avatar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
    root: {
        alignItems: "center",
        height: 48,
        backgroundColor: "#ffffff",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 14px",
    },
    purple: {
        color: "#ffffff",
        backgroundColor: '#3f51b5',
    },
    leftContainer: {
        position: "relative",
        display: "flex",
        width: "70%",
        alignItems: "center",
        justifyContent: "flex-start"
    }
}));


const Navigation = ({ handlelogout }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.leftContainer}>
                    <Avatar
                        alt='logo'
                        src={!JSON.parse(localStorage.getItem('authUser')) ? '' : API_ROOT + JSON.parse(localStorage.getItem('authUser')).image}
                        className={classes.purple}>
                        {!JSON.parse(localStorage.getItem('authUser')) ? '' : JSON.parse(localStorage.getItem('authUser')).token.name[0].toUpperCase()}
                    </Avatar>
                    <Typography className='nav-title' component="div" key='h5' variant='h5'>{!JSON.parse(localStorage.getItem('authUser')) ? '' : `Hi, ${JSON.parse(localStorage.getItem('authUser')).token.name}`}</Typography>
                </div>
                <Button onClick={handlelogout}>Logout</Button>
            </div>
        </React.Fragment >
    )
}

export default Navigation
