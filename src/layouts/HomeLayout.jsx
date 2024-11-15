import { Link } from "react-router-dom";
import Header from "../components/Header";
import Marquee from "react-fast-marquee";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="max-w-screen-xl mx-auto bg-[#F3F3F3] p-3 mt-5">
                    <div className="flex items-center gap-2">
                        <p className="py-2 px-3 bg-[#D72050] text-[20px] font-medium text-white">Latest</p>
                        <Marquee className="" pauseOnHover={true} speed={100}>
                            <Link className="mr-10" to="/news">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit!
                            </Link>
                            <Link className="mr-10" to="/news">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit!
                            </Link>
                            <Link className="mr-10" to="/news">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit!
                            </Link>
                        </Marquee>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default HomeLayout;