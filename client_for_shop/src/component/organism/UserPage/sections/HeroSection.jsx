import {useNavigate} from "react-router-dom";
import {Orders, Sidebar} from "../../../molecul/UserPage";
import Grid from "@mui/material/Unstable_Grid2";

const HeroSection = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Grid
                container
                direction="row"
                component='section'
                spacing={{ mobile: 3, tablet: 3, laptop:3 , desktop: 3}}
                alignItems="center"
                style={{
                    width:"100%",
                    margin:'0'
                }}
            >
                <Grid item mobile={10} tablet={5} laptop={4} desktop={2} >
                    <Sidebar/>
                </Grid>
                <Grid item mobile={10} tablet={5} laptop={4} desktop={8} >
                    <Orders/>
                </Grid>
            </Grid>
        </div>

    )
}

export default HeroSection;