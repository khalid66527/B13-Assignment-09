import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 ">
            <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">DriveFleet</h2>
                    <p className="text-sm text-gray-400">
                        Book your dream car anytime, anywhere. 
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/explore-cars" className="hover:text-white">Explore Cars</Link></li>
                        <li><Link href="/my-bookings" className="hover:text-white">My Bookings</Link></li>
                        <li><Link href="/add-car" className="hover:text-white">Add Car</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                        <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

        
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p className="text-sm text-gray-400 flex gap-2 items-center"><FaLocationDot /> Dhaka, Bangladesh</p>
                    <p className="text-sm text-gray-400 mt-2 flex gap-2 items-center"><MdOutlineMail /> support@drivefleet.com</p>
                    <p className="text-sm text-gray-400 mt-2 flex gap-2 items-center"> <IoCall />+880 1234-567890</p>
                </div>

            </div>

    
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} DriveFleet. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer