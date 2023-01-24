import Grid from "@mui/material/Unstable_Grid2";


import {useEffect, useRef, useState} from "react";

const Verify = ({changeSection}) => {
    const[pin, setPin] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null });
    const [btnDisabled, setBtnDisabled] = useState(true);

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);
    const pin6Ref = useRef(null);

    useEffect(()=> {
        if(pin["6"] !== null && pin["6"] !== ''){
            setBtnDisabled(false)
        }
        else setBtnDisabled(true)
    },[pin])

    return(
        <div>
            <Grid
                container
                direction="column"
                rowSpacing={{ mobile: 1, tablet: 1, laptop:1 , desktop: 4}}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item mobile={12} tablet={12} laptop={12} desktop={10} >
                    <p className="verifyHeader">Code Verification</p>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={10}>
                    <label htmlFor="verifyKey" className="labelInp">Please enter code</label><br/>
                    <div className="verifyDiv">
                        <div >
                            <input key={1} type="number"  name='1' className="keyInp" ref={pin1Ref} onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});
                                if(e.target.value ){
                                    pin2Ref.current.focus()
                                }
                            }} />
                            <hr className="divHr"/>
                        </div>
                        <div>
                            <input key={2} type="number" name='2' ref={pin2Ref} className="keyInp" onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});
                                if(e.target.value && !pin.pin3){
                                    pin3Ref.current.focus()
                                }
                            }} onKeyDown={(e)=> {
                                if (!e.target.value && e.key === 'Backspace'){
                                    pin1Ref.current.focus()
                                }
                            }}/>
                            <hr className="divHr"/>
                        </div>
                        <div>
                            <input key={3} type="number" name='3' className="keyInp" ref={pin3Ref} onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});
                                if(e.target.value && !pin.pin4){
                                    pin4Ref.current.focus()
                                }
                            }} onKeyDown={(e)=> {
                                if (!e.target.value && e.key === 'Backspace'){
                                    pin2Ref.current.focus()
                                }
                            }}/>
                            <hr className="divHr"/>
                        </div>
                        <div>
                            <input key={4} type="number" name='4' className="keyInp"  ref={pin4Ref} onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});
                                if(e.target.value && !pin.pin5){
                                    pin5Ref.current.focus()
                                }

                            }} onKeyDown={(e)=> {
                                if (!e.target.value && e.key === 'Backspace'){
                                    pin3Ref.current.focus()
                                }
                            }}/>
                            <hr className="divHr"/>
                        </div>
                        <div className={"hello"}>
                            <input key={5} type="number" name='5' className="keyInp" ref={pin5Ref} onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});
                                if(e.target.value && !pin.pin6){
                                    pin6Ref.current.focus()
                                }
                            }} onKeyDown={(e)=> {
                                if (!e.target.value && e.key === 'Backspace'){
                                    pin4Ref.current.focus()
                                }
                            }}/>
                            <hr className="divHr"/>
                        </div>
                        <div className={"hello"}>
                            <input key={6} type="number" name='6' className="keyInp" ref={pin6Ref} onChange={(e) => {
                                setPin({...pin, [e.target.name]: e.target.value});

                            }} onKeyDown={(e)=> {
                                if (!e.target.value && e.key === 'Backspace'){
                                    pin5Ref.current.focus()
                                }
                            }}/>
                            <hr className="divHr"/>
                        </div>

                    </div>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={10} >

                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={10} >
                    <button className="loginBtn" disabled={btnDisabled}>Confirm</button>
                </Grid>
                <Grid item mobile={12} tablet={12} laptop={12} desktop={10} >
                    <p style={{fontSize: "2vh"}}>Already have an account? <span className="signInLink" onClick={() => {
                        changeSection(1)
                    }}> Sign In </span></p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Verify