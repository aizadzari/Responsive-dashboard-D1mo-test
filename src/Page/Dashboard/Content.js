import { Button, makeStyles, Modal, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { get, post, remove, update } from '../Store/Helpers/Helpers'
import DashboardContent from './DashboardContent'
import EmptyPage from './EmptyPage'
import CircularProgress from '@material-ui/core/CircularProgress';

const boxContent = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px)",
    width: "100%",
    backgroundColor: "#f1f1f1",
}

const useStyles = makeStyles(() => ({
    buttonStyles: {
        width: '100%'
    },
    inputStyles: {
        width: "100%",
        marginBottom: 14
    },
    modalCard: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: "14px 30px",
        zIndex: 20
    },
    modal: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    titleModal: {
        margin: "0 0 14px 0"
    },
    modalFooter: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const initialData = {
    labels: ["Completed Tasks", "Uncompleted Tasks"],
    datasets: [
        {
            label: "Sales Analytics",
            backgroundColor: [
                "rgba(63, 81, 181, 1)",
                "rgba(217, 217, 217, 1)",
            ],
            borderWidth: 0.5,
            hoverBackgroundColor: [
                "rgba(63, 81, 181, 0.8)",
                "rgba(217, 217, 217, 0.8)",

            ],
            barPercentage: 4,
            minbarThickness: 25,
            maxBarThickness: 40,
            data: [0, 0]
        }
    ]
};


const Content = () => {
    const classes = useStyles();
    const [visibleModal, setVisibleModal] = useState(false)
    const [dataSource, setDataSource] = useState({
        data: [],
        loading: false
    })
    const [formTask, setFormTask] = useState({
        id: "",
        name: ""
    })
    const [dashboardData, setDashboardData] = useState(false)
    const [chartData, setChartData] = useState(initialData)
    const [dataSourceList, setDataSourceList] = useState({
        data: [],
        loading: false
    })

    useEffect(() => {
        getTask(true)
    }, [])

    const handleSearching = (value) => {
        setDataSourceList({
            ...dataSource,
            loading: true
        })
        
        const copyData = [...dataSource.data]
        const filter = copyData.filter(x => x.name === value)

        if (filter.length !== 0) {
            setDataSourceList({
                loading: false,
                data: filter
            })
        }

        if (value.length === 0) {
            getTask(true)
        }
    }

    const getTask = async (loading) => {
        setDataSource(prev => {
            return {
                ...prev,
                loading
            }
        })
        const response = await get('tasks');
        if (response) {

            const sortItem = response.tasks.reverse()

            setDashboardData(sortItem)
            setDataSource({
                data: sortItem,
                loading: false
            })
            setDataSourceList({
                data: sortItem,
                loading: false
            })

            setChartData(prev => {
                return {
                    ...prev,
                    datasets: [
                        {
                            ...prev.datasets[0],
                            data: [sortItem.filter(x => x.completed === true).length, sortItem.filter(x => x.completed !== true).length]
                        }
                    ]
                }
            })
        }
    }

    const handleVisibleModal = (data) => {
        if (data) {
            setFormTask({
                id: data._id,
                name: data.name
            })
        }
        setVisibleModal(!visibleModal)
    }

    const handleSubmit = async () => {
        let data = {
            name: formTask.name
        };

        const response = await post('tasks', data);
        if (response) {
            getTask(true)
            setVisibleModal(!visibleModal)
        }
    }

    const updateConfirmTask = async (value) => {
        const response = await update(`tasks/${value._id}`, { completed: !value.completed });
        if (response) {
            getTask(false)
        }
    }

    const handleUpdate = async () => {
        let data = {
            name: formTask.name
        };

        const response = await update(`tasks/${formTask.id}`, data);
        if (response) {
            getTask(true)
            setVisibleModal(!visibleModal)
        }
    }

    const handleRemoveTask = async (id) => {
        const response = await remove(`tasks/${id}`)
        if (response) {
            getTask(true)
        }
    }

    return (
        <React.Fragment>
            {(dataSource.loading && (dataSource.data.length === 0)) ?
                <div style={boxContent}>
                    <CircularProgress disableShrink />
                    <Typography variant="caption" component="div" style={{ marginLeft: 8 }}>Loading</Typography>
                </div> :
                (dataSource.data.length === 0) ?
                    <EmptyPage handleVisibleModal={handleVisibleModal} /> :
                    <DashboardContent
                        dashboardData={dashboardData}
                        dataSource={dataSourceList}
                        handleRemoveTask={handleRemoveTask}
                        handleVisibleModal={handleVisibleModal}
                        handleSearching={handleSearching}
                        updateConfirmTask={updateConfirmTask}
                        chartData={chartData}
                        boxContent={boxContent}
                    />
            }

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                closeAfterTransition
                open={visibleModal}
            >
                <div className={classes.modal}>
                    <div className={classes.modalCard}>
                        <Typography className={classes.titleModal} component="div" variant="body1">{formTask.id ? "EDIT" : "NEW"} TASK</Typography>
                        <TextField label="Task Name" variant="outlined" className={classes.inputStyles} value={!formTask.name ? "" : formTask.name} onChange={e => setFormTask({ ...formTask, name: e.target.value })} />
                        <div className={classes.modalFooter}>
                            <Button variant="contained" color="default" className={classes.buttonStyles} style={{ marginRight: 5 }} onClick={handleVisibleModal}>Cancel</Button>
                            <Button variant="contained" color="primary" className={classes.buttonStyles} style={{ marginLeft: 5 }} onClick={formTask.id ? handleUpdate : handleSubmit}>{formTask.id ? "Edit" : "Submit"}</Button>
                        </div>
                    </div>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default Content
