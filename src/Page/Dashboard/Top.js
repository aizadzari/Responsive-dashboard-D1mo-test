import React from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { Pie } from 'react-chartjs-2';

let options = {
    legend: {
        display: false,
        position: "right"
      },
}

const Top = ({ classes, dashboardData, chartData }) => {
    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.boxContainer}>
                                <Typography component="div" key='body1' variant='body1' style={{ marginBottom: ".5em"}}>
                                    Task Completed
                                    </Typography>

                                <div className={classes.desc}>
                                    <Typography style={{ display: "inline" }} key='h1' variant='h1' color='primary'>{dashboardData.filter(x => x.completed === true).length}</Typography>/
                                    <Typography key='caption' variant='caption'>{dashboardData.length}</Typography>
                                </div>

                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.boxContainer}>
                                <Typography component="div" key='body1' variant='body1'>
                                    Latest Created Task
                            </Typography>

                                <ul>
                                    {dashboardData.map((x, i) => {
                                        return i < 3 && <li key={i}><Typography key="caption" variant='caption' style={{ textDecoration: x.completed ? "line-through" : "none" }}>{x.name}</Typography></li>
                                    })}
                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <div className={classes.boxContainer}>
                                <Pie  data={chartData} options={options} />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Top
