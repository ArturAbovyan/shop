import {useState} from "react";

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(
        {
            email : "",
            password : "",
        }
    )
    const changeHandler = event => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        callback();
    }
    return {
        changeHandler,
        onSubmit,
        values
    }
}