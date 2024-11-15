
const RightNavbar = () => {
    return (
        <div className="space-y-3">
            <p className="font-semibold text-[20px]">Login With</p>
            <div className="space-y-2 *:w-full">
                <button className="btn">Login with Facebook</button>
                <button className="btn">Login with Google</button>
            </div>
        </div>
    );
};

export default RightNavbar;