import {useEffect, useState} from "react";
import {gql} from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import VerifySection from "../../../../component/organism/Auth/Verify/sections/Verify";


const VERIFY_USER = gql`
        mutation Mutation(
            $verifyEmail: VerifyEmail
        ) {
            verifyUser(
                verifyEmail: $verifyEmail
            ) {
                userId
                token
            }
        }
    `

const AccountVerify = () => {
    let navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    const values = {
            userId : "",
            token : ""
        };

    const {id} = useParams();
    const {token} =useParams()
    useEffect(()=>{
        values.userId = id;
        values.token = token;
        verifyUser();

    },[])
    const [verifyUser, {loading}] = useMutation(VERIFY_USER, {
        update(proxy, { data: { verifyUser: userData }}) {
            navigate("/");
        },
        onError({graphQLErrors}){
            setErrors(graphQLErrors);
        },
        variables: { verifyEmail: values}
    })
    return(
        <div>
            <VerifySection/>
        </div>

    )
}

export default AccountVerify;