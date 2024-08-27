
import img from'../../assets/Kurmatologo.png';

const Header = () => {
    return(
        <div>
<header>
<nav className=" bg-emerald-100 p-4">
      <div className=" container mx-auto flex justify-between items-center">
      <img className='h-10 w-1/6' src={img} alt="Kurmato Logo" />
        <div className="text-black text-lg flex justify-center">
        <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">Services</a>
          <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">About</a>
          <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">Services</a>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </nav>

</header>
    </div>
    )
};

export default Header;
