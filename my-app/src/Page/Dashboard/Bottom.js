import { Button, Card, CardContent, Checkbox, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Skeleton } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "calc(100% - 15%)",
        margin: 'auto',
        flex: 1
    },
    boxContainer: {
        position: "relative",
        display: "block",
        maxHeight: 420,
        overflow: "scroll",
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        borderBottom: "1px solid #e9e9e9"
    },
    emptybox: {
        textAlign: "center",
        padding: 20
    },
}));

const Bottom = ({ dataSource, handleRemoveTask, handleVisibleModal, handleSearching, updateConfirmTask }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        if (dataSource) {
            const copyData = [...dataSource.data];
            const filterItem = copyData.map(x => {
                let id;
                if (x.completed === true) {
                    id = x._id
                }
                return id
            })

            setChecked(filterItem);
        }
    }, [dataSource])

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value._id);
        const newChecked = [...checked];

        updateConfirmTask(value);

        if (currentIndex === -1) {
            newChecked.push(value._id);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }
    return (
        <Container>
            <div className={classes.root}>
                <div className='top-container'>
                    <Typography variant="h5" component="div" className='title-content' >Task</Typography>
                    <div>
                        <TextField id="outlined-size-small" label="Search task" variant="outlined" size="small" className="input-searching" onChange={e => handleSearching(e.target.value)} />
                        <Button variant="contained" color="primary" onClick={handleVisibleModal} className="btn-add-task">+ ADD TASK</Button>
                    </div>
                </div>
                <Grid item xs={12} md={12}>
                    <Card className={classes.boxContainer}>
                        <CardContent>
                            {dataSource.loading ?
                                <div>
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation="wave" width="60%" />
                                </div> :
                                <List>
                                    {dataSource.data.map((value) => {
                                        const labelId = `checkbox-list-label-${value._id}`;
                                        return (
                                            <ListItem key={value._id} style={{ textDecoration: value.completed ? "line-through" : "none" }} role={undefined} dense button onClick={() => handleToggle(value)} className={classes.cardContent}>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(value._id) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={labelId} primary={value.name} />
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" aria-label="delete" onClick={() => handleVisibleModal(value)}>
                                                        <CreateIcon />
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTask(value._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            }

                        </CardContent>
                    </Card>
                </Grid>
            </div >
        </Container>
    )
}

export default Bottom
