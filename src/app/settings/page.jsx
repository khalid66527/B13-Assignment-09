import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaUser, FaEnvelope, FaFingerprint, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaCar, FaBookmark, FaHome } from "react-icons/fa";

const SettingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    if (!user) {
        redirect("/auth/signin");
    }

    return (
        <div className="min-h-[85vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 h-32 relative">
                    <div className="absolute -bottom-12 left-8">
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full border-4 border-white bg-green-100 flex items-center justify-center text-green-700 text-3xl font-bold shadow-md">
                                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Title */}
                <div className="pt-16 pb-6 px-8 border-b border-gray-100">
                    <h1 className="text-3xl font-extrabold text-gray-900">{user.name}</h1>
                    <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
                </div>

                {/* Details Section */}
                <div className="p-8 space-y-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                        <span className="w-2 h-6 bg-green-500 rounded-full inline-block"></span>
                        User Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="p-3 bg-green-50 rounded-xl text-green-600 mr-4">
                                <FaUser size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</p>
                                <p className="text-base font-bold text-gray-800 mt-0.5">{user.name || "N/A"}</p>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="p-3 bg-green-50 rounded-xl text-green-600 mr-4">
                                <FaEnvelope size={20} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</p>
                                <p className="text-base font-bold text-gray-800 mt-0.5 truncate">{user.email || "N/A"}</p>
                            </div>
                        </div>

                        {/* User ID Field */}
                        <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="p-3 bg-green-50 rounded-xl text-green-600 mr-4">
                                <FaFingerprint size={20} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">User ID</p>
                                <p className="text-sm font-mono font-medium text-gray-600 mt-0.5 truncate">{user.id || "N/A"}</p>
                            </div>
                        </div>

                        {/* Joined Date Field */}
                        <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-gray-50">
                            <div className="p-3 bg-green-50 rounded-xl text-green-600 mr-4">
                                <FaCalendarAlt size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Joined Date</p>
                                <p className="text-base font-bold text-gray-800 mt-0.5">
                                    {user.createdAt
                                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })
                                        : "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Email Verification Banner */}
                    <div className={`mt-6 flex items-center justify-between p-4 rounded-2xl border ${
                        user.emailVerified 
                            ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
                            : "bg-amber-50 border-amber-100 text-amber-800"
                    }`}>
                        <div className="flex items-center gap-3">
                            {user.emailVerified ? (
                                <FaCheckCircle size={22} className="text-emerald-500 flex-shrink-0" />
                            ) : (
                                <FaTimesCircle size={22} className="text-amber-500 flex-shrink-0" />
                            )}
                            <div>
                                <p className="font-semibold text-sm">
                                    {user.emailVerified ? "Verified Account" : "Unverified Account"}
                                </p>
                                <p className="text-xs opacity-90">
                                    {user.emailVerified 
                                        ? "Your email address has been verified successfully." 
                                        : "Please check your email to verify your account."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Navigation */}
                <div className="p-8 bg-gray-50/50 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Navigation</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link href="/my-bookings">
                            <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-green-50 hover:text-green-600 text-gray-700 border border-gray-200 py-3 px-4 rounded-xl font-semibold shadow-sm transition active:scale-95 cursor-pointer">
                                <FaBookmark size={16} /> My Bookings
                            </button>
                        </Link>
                        <Link href="/my-added-cars">
                            <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-green-50 hover:text-green-600 text-gray-700 border border-gray-200 py-3 px-4 rounded-xl font-semibold shadow-sm transition active:scale-95 cursor-pointer">
                                <FaCar size={16} /> My Added Cars
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold shadow-md transition active:scale-95 cursor-pointer">
                                <FaHome size={16} /> Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;