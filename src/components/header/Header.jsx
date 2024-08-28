
import { Link } from 'react-router-dom';
import img from'../../assets/Kurmatologo.png';

const Header = () => {
    return(
        <div>
<header>
<nav className=" bg-emerald-100 p-4">
      <div className=" container mx-auto flex justify-between items-center">
      <img className='h-10 w-1/6' src={img} alt="Kurmato Logo" />
        <div className="text-black text-lg flex justify-center">
        <a href="#" className="px-3 py-2 font-bold ">Home</a>
          <a href="#" className="px-3 py-2 rounded font-bold ">Employee</a>
          <a href="/project" className="px-3 py-2 font-bold">Project</a>
        </div>
        <div>
<Link to ="/contactus">
          <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </nav>

</header>
    </div>
    )
};

export default Header;
