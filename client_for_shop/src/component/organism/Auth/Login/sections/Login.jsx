import "../../style.scss"

import {useContext, useState} from "react";
import {AuthContext} from "../../../../../context/authContext";
import { useForm } from "../../../../../hooks/hooks";
import {useMutation, useQuery} from "@apollo/react-hooks";

import {gql} from "graphql-tag";

import {Link, useNavigate} from "react-router-dom";

import {Button, TextField} from "@mui/material";

import Grid from '@mui/material/Unstable_Grid2';
import {toast} from "react-toastify";



const LOGIN_USER = gql`
    mutation Mutation(
        $loginInput: LoginInput
    ) {
        loginUser(
            loginInput: $loginInput
        ) {
            email
            token
        }
    }
`
const LoginSection = () => {
    const context = useContext(AuthContext);

    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();

    const loginUserCallback = () => {
        loginUser();
    }
    const {changeHandler, onSubmit, values} = useForm(loginUserCallback, {
        email: '',
        password: ''
    });

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData }}) {
            context.login(userData);
            navigate("/");
        },
        onError({graphQLErrors}){
            toast.error(graphQLErrors[0].message, {
                position: toast.POSITION.BOTTOM_CENTER
            });

        },
        variables: { loginInput: values}
    })
    return (
        <div>
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
                    <p className="divHeader">Login</p>
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
                                LOGIN
                            </Button>

                        </Grid>
                        <Grid item mobile={10} tablet={5} laptop={5} desktop={4} >
                            <span className="">or</span>
                            <Link to="/registration" className="regLink">Create an account</Link>
                        </Grid>
                    </Grid>



                </Grid>

            </Grid>


            { errors.map((error) => {
                return (
                    null
                )
            })}
        </div>
    )
}

export default LoginSection;