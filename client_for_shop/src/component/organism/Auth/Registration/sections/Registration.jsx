import "../../style.scss"
import 'react-toastify/dist/ReactToastify.css';

import {useContext, useState} from "react";
import {AuthContext} from "../../../../../context/authContext";
import { useForm } from "../../../../../hooks/hooks";
import {useMutation} from "@apollo/react-hooks";

import {gql} from "graphql-tag";

import { toast } from 'react-toastify';

import {Link, useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email
            token
        }
    }
`
const RegSection = () => {
    const context = useContext(AuthContext);

    const [confirmPass, setConfirmPass] = useState();

    const navigate = useNavigate()

    const registerUserCallback = () => {
        if(confirmPass !== values.password){
            return toast.error("Passwords don't match !", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        registerUser();
    }
    const {changeHandler, onSubmit, values} = useForm(registerUserCallback, {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })
    const handleTakeValue = (e) => {
        setConfirmPass(e.target.value)
    }


    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData }}) {
            //context.login(userData);
            toast.warn("Please Verify Your Account", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            navigate("/");
        },
        onError({graphQLErrors}) {
            toast.error(graphQLErrors[0].message, {
                position: toast.POSITION.BOTTOM_CENTER
            });
        },
        variables: { registerInput: values}
    })
    return (
        <div style={{width: "100%"}}>
            <Grid
                container
                direction="column"
                component='section'
                spacing={{ mobile: 3, tablet: 3, laptop:3 , desktop: 3}}
                alignItems="center"
                justifyContent="center"
                style={{
                    width:"100%",
                    margin:'0'
                }}
            >
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3}>
                    <p className="divHeader">I'm new here</p>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} sx={{padding: 0}}>
                    <Grid
                        container
                        direction="row"
                        columnSpacing={{ mobile: 1, tablet: 2, laptop:2 , desktop: 2}}
                        justifyContent="space-round"
                    >
                        <Grid item mobile={12} tablet={12} laptop={6} desktop={6} >
                            <TextField
                                label="First Name"
                                type="text"
                                name="firstName"
                                autoComplete="given-name"
                                onChange={changeHandler}
                                className="loginInput"
                                sx={{width: "100%"}}
                            />
                        </Grid>
                        <Grid item mobile={12} tablet={12} laptop={6} desktop={6} >
                            <TextField
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                type="text"
                                onChange={changeHandler}
                                className="loginInput"
                                sx={{width: "100%"}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3}>
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="off"
                        onChange={changeHandler}
                        className="loginInput"
                        sx={{width: "100%"}}
                    />
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} >
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="off"
                        onChange={changeHandler}
                        className="loginInput"
                        sx={{width: "100%"}}
                    />
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} >
                    <TextField
                        label="Confirm Password"
                        type="password"
                        name="Confirm"
                        autoComplete="off"
                        onChange={handleTakeValue}
                        className="loginInput"
                        sx={{width: "100%"}}
                    />
                </Grid>
                <Grid item mobile={10} tablet={3} laptop={4} desktop={3} >
                    <Grid
                        container
                        direction="row"
                        columnSpacing={{ mobile: 1, tablet: 1, laptop:2 , desktop: 1}}
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            margin:'0'
                        }}
                    >

                        <Grid item mobile={10} tablet={3} laptop={4} desktop={4} >
                            <Button variant="contained" onClick={onSubmit} sx={{
                                backgroundColor:"#6c1182",
                            }}>
                                Create
                            </Button>

                        </Grid>
                        <Grid item mobile={10} tablet={5} laptop={5} desktop={5} >
                            <span className="">Already have an account ?</span>
                            <Link to="/login" className="regLink">Sign In!</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default RegSection;