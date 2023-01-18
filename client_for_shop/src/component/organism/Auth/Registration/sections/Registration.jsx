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
        password: ''
    })
    const handleTakeValue = (e) => {
        setConfirmPass(e.target.value)
    }


    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData }}) {
            //context.login(userData);
            // navigate("/");
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
                    <p className="divHeader">Create an account</p>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3}>
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="current-password"
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
                        autoComplete="current-password"
                        onChange={changeHandler}
                        className="loginInput"
                        sx={{width: "100%"}}
                    />
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} >
                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        name="Confirm"
                        autoComplete="current-password"
                        onChange={handleTakeValue}
                        className="loginInput"
                        sx={{width: "100%"}}
                    />
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} >
                    <Grid
                        container
                        direction="row"
                        component='section'
                        columnSpacing={{ mobile: 1, tablet: 1, laptop:2 , desktop: 1}}
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            margin:'0'
                        }}
                    >

                        <Grid item mobile={10} tablet={3} laptop={4} desktop={3} >
                            <Button variant="contained" onClick={onSubmit} sx={{
                                backgroundColor:"#6c1182",
                            }}>
                                Create
                            </Button>

                        </Grid>
                        <Grid item mobile={10} tablet={5} laptop={5} desktop={4} >
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