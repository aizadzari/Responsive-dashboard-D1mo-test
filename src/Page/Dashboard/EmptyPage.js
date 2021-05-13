import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    boxContent: {
        position: "relative",
        display: "flex",
        height: "calc(100vh - 62px)",
        width: "100%",
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        textAlign: "center",
        padding: "40px 60px",
        backgroundColor: "#ffffff",
        borderRadius: 8
    },
    titleCard: {
        margin: "0 0 20px 0"
    }
}));

const EmptyPage = ({ handleVisibleModal }) => {
    const classes = useStyles();
    return (
        <div className={classes.boxContent}>
            <div className={classes.card}>
                <Typography component="div" variant="body1" className={classes.titleCard}>You have no task.</Typography>
                <Button variant="contained" color="primary" onClick={handleVisibleModal}>+ NEW TASK</Button>
            </div>
        </div>
    )
}

export default EmptyPage
