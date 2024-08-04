
import { BiCross } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

interface Props{
  nav:boolean;
  closeNav:()=>void;
 
}

function MobileNav({nav,closeNav}:Props) {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <nav>
      <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a] `}>
       <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">About</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Services</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Contact</a>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Login</button>
        </div>
        <div onClick={closeNav}className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300">
          <RxCross1/>
        </div>
      </div>
  </nav>
  )
}

export default MobileNav
