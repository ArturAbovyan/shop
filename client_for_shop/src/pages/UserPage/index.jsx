import {useNavigate} from "react-router-dom";
import {HeroSection} from "../../component/organism/UserPage";

const UserPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <HeroSection/>
        </div>

    )
}

export default UserPage;