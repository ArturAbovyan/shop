import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const LogedInLayout = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LogedInLayout;