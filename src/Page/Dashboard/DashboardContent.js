import { makeStyles } from '@material-ui/core';
import React from 'react'
import Bottom from './Bottom';
import Top from './Top';

const boxContent = {
    position: "relative",
    display: "block",
    minHeight: "calc(100vh - 145px)",
    padding: "40px 20px",
    backgroundColor: "#f1f1f1",
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        width: "calc(100% - 15%)",
        flexGrow: 1,
    },
    paper: {
        position: "relative",
        height: 130,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    title: {
        fontWeight: 'normal',
        fontSize: 20,
        margin: "0 0 5px 0",
        width: "100%",
    },
    boxContent: {
        margin: 'auto',
        position: "relative",
        display: "flex",
        width: "100%",
        minHeight: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    boxContentDesc: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }
}));


const DashboardContent = ({ dataSource, dashboardData, handleRemoveTask, handleVisibleModal, handleSearching, updateConfirmTask, chartData }) => {
    const classes = useStyles();
    return (
        <div style={boxContent}>
            <Top classes={classes} dashboardData={dashboardData} chartData={chartData} />
            <Bottom dataSource={dataSource} handleRemoveTask={handleRemoveTask} handleVisibleModal={handleVisibleModal} handleSearching={handleSearching} updateConfirmTask={updateConfirmTask} />
        </div>
    )
}

export default DashboardContent
