import { Link } from 'react-router-dom';
import img from '../../assets/images/Kurmatologo.png';

const Header = () => {
  return (
    <header>
      <nav className=" p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <img className='h-10 mb-4 md:mb-0 md:w-1/9' src={img} alt="Kurmato Logo" />

          {/* Navigation Links */}
          <div className="text-black text-center text-xl  flex flex-col
          md:flex-row md:justify-between mb-4 md:gap-10 ">
            <Link to="/home" className="px-5 py-2 mx-7  hover:bg-gray-200 rounded">Home</Link>
            <Link to="/employee" className="px-3 py-2  hover:bg-gray-200 rounded">Employee</Link>
            <Link to="/project" className="px-3 py-2  hover:bg-gray-200 rounded">Project</Link>
          </div>

          {/* Contact Button */}
          <div>
            <Link to="/contact">
              <button className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-600">
                Contact Us
              </button>
            </Link>
            <Link to="">
              <button className="bg-blue-950 text-white px-8 py-2 mx-4 rounded hover:bg-blue-600">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;