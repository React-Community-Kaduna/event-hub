import { Link } from "react-router-dom";
import errorImage from "../assets/404.png";
import { TiArrowBackOutline } from "react-icons/ti";

export default function ErrorPage() {
    return <section className="bg-error w-full h-dvh flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 px-8 md:px-20 font-poppins text-center md:text-start max-w-6xl mx-auto">
       <div className="grid gap-4">
       <p className="text-xl" >The page you are looking for might have been removed, <br/> had its name changed or is temporary unavailable</p>
        <div className="flex items-center gap-2 mx-auto md:mx-0">
            <Link to="/" className="bg-[#3557c2] px-5 py-1 rounded text-white">
            <TiArrowBackOutline/>
            </Link>
            <span>Back to Home Page</span>
        </div>
       </div>
        <img src={errorImage} alt="error image" className="w-4/5 md:w-1/2 object-cover" />
    </section>
}