import React, {useState} from "react";
import "./style.scss";
import Grid from "@mui/material/Unstable_Grid2";
import {Login, Registr, Verify, SetPassword} from "../../molecul/AuthSection";
import firstSectionPng from "../../../assets/loginPage/firstSection.png"

export const Popup = ({ closePopup }) => {
    let section

    const [sectionNumber, setSectionNumber] = useState(1)
    switch(sectionNumber) {
        case 1:
            section = <Login />;
            break;
        case 2:
            section = <Registr changeSection={(number) => { setSectionNumber(number)} }/>;
            break;
        case 3:
            section = <Verify changeSection={(number) =>  { setSectionNumber(number) }} />;
            break;
        case 4:
            section = <SetPassword changeSection={(number) => { setSectionNumber(number) }} />;
            break;
        default:

    }
    console.log(sectionNumber)
    return (
        <div className="popup-container">
            <div className="popup-body">
                <Grid
                    container
                    direction="row"
                    component='section'
                    spacing={{ mobile: 3, tablet: 3, laptop:3 , desktop: 4}}
                    justifyContent= "center"
                    style={{
                        height:"100%",
                        width:'100%',
                        margin:'0'
                    }}
                >
                    <Grid item mobile={12} tablet={6} laptop={6} desktop={6}  >
                        <div className="loginFirstSection">
                           <img src={firstSectionPng} alt="picture" className="loginFirstPicture"/>
                            <h1 className="firstSectionHeading">Welcome To Our Community</h1>
                            <div className="firstSectionParagraph">A whole new productive journey starts right here</div>
                        </div>
                    </Grid>
                    <Grid item mobile={12} tablet={6} laptop={6} desktop={6} >
                        <Grid
                            container
                            direction="row"
                            spacing={{ mobile: 3, tablet: 3, laptop:3 , desktop: 3}}
                            alignItems="center"
                            justifyContent="center"

                        >
                            {sectionNumber !== 3 && sectionNumber !== 4 ? (
                                <Grid item mobile={12} tablet={12} laptop={9} desktop={9} >
                                    <a onClick={()=>{setSectionNumber(1)}} className="sectionBtn" id={sectionNumber == 1 ? "sectionBtnActive" : null}>Log in</a>
                                    <a onClick={()=>{setSectionNumber(2)}} className="sectionBtn" id={sectionNumber == 2 ? "sectionBtnActive" : null} style={{marginLeft:"2vw"}}>Sign up</a>
                                </Grid>
                                ) : null
                            }
                            <Grid item mobile={12} tablet={12} laptop={9} desktop={9} sx={{padding: 0}}>
                                {section }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};