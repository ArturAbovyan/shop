import Grid from "@mui/material/Unstable_Grid2";

import GoogleIcon from "../../../../assets/loginPage/SocialIcons/google.png"
import AppleIcon from "../../../../assets/loginPage/SocialIcons/apple.png"
import FacebookIcon from "../../../../assets/loginPage/SocialIcons/facebook.png"



const Login = () => {
    return(
        <div>
            <Grid
                container
                direction="column"
                rowSpacing={{ mobile: 1, tablet: 1, laptop:1 , desktop: 3}}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <label htmlFor="email" className="labelInp">E-mail</label><br/>
                    <input type={"email"} className="loginInp"/>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12}>
                    <label htmlFor="password" className="labelInp">Password</label><br/>
                    <input type={"password"} className="loginInp"/>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <a className="passwordReset">Recovery password</a>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <button className="loginBtn">Sign In</button>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <p className="socialIconsHeading"><span>or continue with</span></p>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <Grid
                        container
                        direction="row"
                        spacing={{ mobile: 1, tablet: 2, laptop:3 , desktop: 2}}
                        sx={{padding: 0}}
                    >
                        <Grid item mobile={4} tablet={4} laptop={4} desktop={4} >
                            <button className="socialBtn">
                                <img alt="Google"  src={GoogleIcon} className="socialIcon"/>
                            </button>
                        </Grid>
                        <Grid item mobile={4} tablet={4} laptop={4} desktop={4} >
                            <button className="socialBtn">
                                <img alt="Apple"  src={AppleIcon} className="socialIcon" />
                            </button>
                        </Grid>
                        <Grid item mobile={4} tablet={4} laptop={4} desktop={4} >
                            <button className="socialBtn">
                                <img alt="Facebook"  src={FacebookIcon} className="socialIcon" />
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login