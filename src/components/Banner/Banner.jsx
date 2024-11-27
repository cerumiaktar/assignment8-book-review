import { useNavigate } from "react-router-dom";


const Banner = () => {

    const navigate = useNavigate();

    const handleViewAllList = () =>{
        navigate("/listedbooks");
    }

    return (
        <div>
            <div className="hero bg-base-200 h-[554px] rounded-2xl mt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/mCBWwpp/hero.png"
                        className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold w-8/12 mb-10">Books to freshen up your bookshelf</h1>
                        
                        <button onClick={handleViewAllList} className="btn bg-[#23BE0A] text-xl font-bold text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;