import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[85%] mx-auto">
            <Outlet/>
        </div>
    );
};

export default Root;