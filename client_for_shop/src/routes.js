import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import DefaultLayout from "./layouts/Default";
import LogedInLayout from "./layouts/LogedIn";

import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogedInLayout/>}>
                        <Route exact index element={<Home/>}></Route>
                        <Route exact path='/user' element={<UserPage/>}></Route>
                        <Route exact path='*' element={<Navigate to="/"/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
    else return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route exact index element={<Home/>}></Route>
                    <Route exact path='*' element={<Navigate to="/"/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}