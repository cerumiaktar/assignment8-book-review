import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;