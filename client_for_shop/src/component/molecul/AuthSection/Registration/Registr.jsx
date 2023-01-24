import Grid from "@mui/material/Unstable_Grid2";
import person from"../../../../assets/loginPage/person.png"
import organization from"../../../../assets/loginPage/organization.png"
import {useState} from "react";

const Registr = ({changeSection}) => {

    const [userType, setUserType] = useState("person")

    return(
        <div>
            <Grid
                container
                direction="column"
                rowSpacing={{ mobile: 2, tablet: 0.8, laptop:1.1 , desktop: 3}}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12}>
                    <div className="userTypeChoose">
                        <div className="userTypeTwoDiv" id={userType === "person" ? "userTypeActive" : null} onClick={()=>{
                            setUserType("person")
                        }}>
                            <img alt="Person" src={person}/>
                            <span>Person</span>
                        </div>
                        <div className="userTypeTwoDiv" id= {userType === "organization" ? "userTypeActive" : null}  onClick={()=>{
                            setUserType("organization")
                        }}>
                            <img alt="organization" src={organization}/>
                            <span>Organization</span>
                        </div>
                    </div>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12}>
                    <label htmlFor="fullName" className="labelInp">Full Name</label><br/>
                    <input type="text" className="loginInp" autoComplete="nope"/>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12}>
                    <label htmlFor="telephone" className="labelInp">Phone Number</label><br/>
                    <input type="tel" className="loginInp" autoComplete="nope"/>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12}>
                    <label htmlFor="email" className="labelInp">E-mail</label><br/>
                    <input type="email" className="loginInp" autoComplete="nope" />
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <button className="loginBtn" onClick={() => {
                        changeSection(3)
                    }}>Next</button>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={12} >
                    <p style={{fontSize: "2vh"}}>Already have an account? <span className="signInLink" onClick={() => {
                        changeSection(1)
                    }}> Sign In </span></p>
                </Grid>

            </Grid>
        </div>
    )
}

export default Registr