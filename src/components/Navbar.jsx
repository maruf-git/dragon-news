import { NavLink } from "react-router-dom";
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-3 ml-[140px]">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-3 items-center">
                <img src={user} alt="" />
                <p className="py-2 px-4 bg-[#403F3F] text-white font-semibold text-[20px]">Login</p>
            </div>
        </div>
    );
};

export default Navbar;