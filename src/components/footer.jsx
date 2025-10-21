// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-red-600">Nkiri Movies</h2>
        <p className="mt-2 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nkiri Movies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
