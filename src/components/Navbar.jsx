import Link from "next/link"

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="navbar max-w-7xl mx-auto px-4">

                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            ☰
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow-lg bg-white text-black rounded-xl z-10">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/explore-cars">Explore Cars</Link></li>
                            <li><Link href="/add-car">Add Car</Link></li>
                            <li><Link href="/my-bookings">My Bookings</Link></li>
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link href="/" className="text-2xl font-extrabold tracking-tight">
                        <span className="text-green-500">Car</span>
                        <span className="text-gray-800">Park</span>
                    </Link>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 font-medium text-gray-700">
                        <li><Link className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-500 transition" href="/">Home</Link></li>
                        <li><Link className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-500 transition" href="/explore-cars">Explore Cars</Link></li>
                        <li><Link className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-500 transition" href="/add-car">Add Car</Link></li>
                        <li><Link className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-500 transition" href="/my-bookings">My Bookings</Link></li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end gap-3">

                  

                    {/* Profile */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                U
                            </div>
                        </div>

                        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow-xl text-black bg-white rounded-xl w-56">
                            <li><Link href="/add-car">Add Car</Link></li>
                            <li><Link href="/my-bookings">My Bookings</Link></li>
                            <li><Link href="/my-added-cars">My Added Cars</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li><Link className="text-red-500" href="/logout">Logout</Link></li>
                        </ul>
                    </div>
                      {/* Sign In */}
                    <Link href="/login">
                        <button className="px-4 py-2 rounded-lg border border-green-500 text-green-500 font-medium hover:bg-green-500 hover:text-white transition duration-200">
                            Sign In
                        </button>
                    </Link>

                    {/* Sign Up */}
                    <Link href="/register">
                        <button className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition duration-200">
                            Sign Up
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar