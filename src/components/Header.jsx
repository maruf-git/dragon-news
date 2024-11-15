import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2 gap-2">
            <div>
                <img className="w-[350px]" src={logo} alt="" />
            </div>
            <p className="text-[#706F6F] text-[18px]">Journalism Without Fear or Favour</p>
            <p className="text-[#706F6F] text-[20px] font-medium">{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
    );
};

export default Header;