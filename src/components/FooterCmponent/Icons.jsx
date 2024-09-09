import React from 'react'
import { FaInstagramSquare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Icons = () => {
  return (
    <div>
       <div className="text-slate-900 flex text-2xl gap-4 ">
                        <a href="https://www.instagram.com/kurmato_official" >
                            <FaInstagramSquare />
                        </a>
                        <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fkurmato.com%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3-2Asj25NWTrwG9NaTVHkNL
                        -FRYRlmtfdFREgqg7WVUaK9_TfTsuioN7o_aem_i2wph7GdLXO3Vp-rU6mFRw&h=AT3RRXnQc-
                        wSMzZTXP5S8oNwxwbT585BHJdww2QzTH9XyJeMbJG9Abpwx9VtszU1YuBCjhj7IK3Bww-rphBB5wQuMtOsu7ZirdHb0UzSZnQH-SXclonAL7u6MqsDWEJMSmGgvg" >
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/kurmato_official"  >
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/company/kurmato_official" >
                            <FaLinkedin />
                        </a>
                    </div>
                    {/* <div>
                        <Link to="/aboutus" className="block py-2 mt-4 bg-blue-950 text-white px-4 rounded hover:bg-blue-800">
                                About Us
                            </Link>
                    </div> */}
    </div>
  )
}

export default Icons
