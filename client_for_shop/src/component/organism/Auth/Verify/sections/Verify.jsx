import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const VerifySection = () =>{
    const navigate = useNavigate()
    return(
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
    )
}

export default VerifySection;