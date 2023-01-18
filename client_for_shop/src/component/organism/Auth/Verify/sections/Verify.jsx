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



const VerifySection = () => {
    const context = useContext(AuthContext);

    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    const registerUserCallback = () => {
        registerUser();
    }
    const {changeHandler, onSubmit, values} = useForm(registerUserCallback, {
        email: '',
        password: ''
    })

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
                <Grid item mobile={10} tablet={5} laptop={4} desktop={4} sx={{textAlign:"center"}}>
                    <p className="divHeader">Your account successfully verified</p>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={3} sx={{textAlign:"center"}}>
                    <p className="divHeader">Please sign in</p>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={1} >
                    <Button variant="contained" onClick={()=>{ navigate("/login") }} sx={{
                        backgroundColor:"#6c1182",
                    }}>
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default VerifySection;