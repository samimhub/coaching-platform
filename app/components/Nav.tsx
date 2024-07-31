

type Props = {}

function Nav({ }: Props) {
    return (
        <nav className="bg-gray-800">
          <div className=" flex items-center justify-between px-12 h-20">
            <div> <h1 className="text-white font-bold text-xl">Coaching</h1></div>
              <div className="hidden lg:flex justify-evenly gap-12 ">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">About</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Services</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Contact</a>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Login</button>
              </div>
        </div>
    </nav>
    )
}

export default Nav