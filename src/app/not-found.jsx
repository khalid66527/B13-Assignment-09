"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4">
      <div className="text-center space-y-6">
        
        <h1 className="text-7xl font-bold text-error">404</h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button className="mt-4 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-focus transition duration-300 shadow-md">
            ⬅ Go To Home
          </button>
        </Link>

      </div>
    </div>
  );
}