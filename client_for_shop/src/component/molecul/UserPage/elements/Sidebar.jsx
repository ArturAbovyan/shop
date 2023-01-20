import "../style.scss";
import {Link, useNavigate} from "react-router-dom";


const SideBar = () => {
    const sidebarItem = [
        {
            html: <Link to={null} className="sidebarItem">My Orders</Link>
        },
        {
            html: <Link to={null} className="sidebarItem">My Favorites</Link>
        },
        {
            html: <Link to={null} className="sidebarItem">My Address</Link>
        },
        {
            html: <Link to={null} className="sidebarItem">My Coupons</Link>
        },
        {
            html: <Link to={null} className="sidebarItem">Purchase history</Link>
        },
        {
            html: <Link to={null} className="sidebarItem">Profile Settings</Link>
        },

    ];
    const navigate = useNavigate();
    return(
        <div className="sidebar">
            <div className="heading">
                Shortcuts
            </div>
            {sidebarItem.map((el, id)=>{
                return (
                    <div key={id}>{el.html}</div>
                )
            })}
        </div>
    )
}

export default SideBar;