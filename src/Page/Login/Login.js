import React from 'react';

// Material Component
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { postLogin } from '../Store/Helpers/Helpers'

export const UseStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9e9e9"
    },
    paper: {
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    card: {
        margin: window.innerWidth < 400 ? 40 : 0,
        borderRadius: 12,
    },
    input: {
        borderRadius: 8
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const login = (props) => {
    const classes = UseStyles();

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            "name": "John Doe",
            "apiKey": "b10ce6bf7468a1f1"
        }

        const response = await postLogin('login', data);
        if (response !== undefined || response !== null) {
            localStorage.setItem("authUser", JSON.stringify(response));
            localStorage.setItem("accesstoken", JSON.stringify(response.token.token));
            props.history.push('/')
        }
    }
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">Login</Typography>

                            <form className={classes.form} noValidate>
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    className={classes.submit}
                                >Login</Button>
                            </form>
                        </div>
                    </Container>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default login
