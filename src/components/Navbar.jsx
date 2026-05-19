"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    // Hydration error এড়ানোর জন্য
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Loading state during hydration
    if (!isClient || isPending) {
        return (
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="navbar max-w-7xl mx-auto px-4">
                    <div className="navbar-start">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight">
                            <span className="text-green-500">Car</span>
                            <span className="text-gray-800">Park</span>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="h-10 w-24 bg-gray-200 animate-pulse rounded-xl" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="navbar max-w-7xl mx-auto px-4">

                {/* LEFT  */}
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
                    {user ? (
                        <>
                            <Avatar className="cursor-pointer">
                                <Avatar.Image alt={user.name} src={user?.image || user?.imageUrl} />
                                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} className="cursor-pointer">
                                    <div className="flex items-center justify-center text-green-600 font-bold">
                                        <FaAlignJustify />
                                    </div>
                                </div>

                                <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow-xl text-black bg-white rounded-xl w-56">
                                    <li><Link href="/add-car">Add Car</Link></li>
                                    <li><Link href="/my-bookings">My Bookings</Link></li>
                                    <li><Link href="/my-added-cars">My Added Cars</Link></li>
                                    <li><Link href="/settings">Settings</Link></li>
                                    <li>
                                        <button onClick={handleSignOut} className="text-red-500 w-full text-left">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="flex gap-3">
                            <Link href="/auth/signin">
                                <button className="px-4 py-2 rounded-xl border-2 border-green-600 text-green-700 font-semibold 
                                    hover:bg-green-600 hover:text-white transition-all duration-300 
                                    active:scale-95 shadow-sm hover:shadow-md">
                                    Sign In
                                </button>
                            </Link>

                            <Link href="/auth/signup">
                                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 
                                    text-white font-semibold shadow-md hover:shadow-lg 
                                    hover:from-green-700 hover:to-green-600 transition-all duration-300 
                                    active:scale-95">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;