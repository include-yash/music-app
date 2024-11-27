'use client'

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"; // Import Next.js Link component

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white">
      <Navbar className="top-2 " />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true); // State to control visibility
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  // Handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY); // Set the current scroll position
    if (window.scrollY > 50) {
      setShowNavbar(false); // Hide navbar after scrolling 50px
    } else {
      setShowNavbar(true); // Show navbar when near the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <div className={cn("fixed top-0 left-1/2 transform -translate-x-1/2 z-50", className)}>
      {/* Conditionally render navbar based on scroll position */}
      {showNavbar && (
        <Menu setActive={setActive}>
          <div className="flex justify-between items-center max-w-6xl w-full px-4 space-x-4 bg-red-600 text-white"> {/* Red background and white text */}
            {/* Left side items (Home) */}
            <div className="flex justify-start space-x-6">
              <Link href="/">
                <button className="text-white">Home</button> {/* White text */}
              </Link>
            </div>

            {/* Centered menu items (Models) */}
            <div className="flex justify-center flex-grow space-x-6">
              <MenuItem setActive={setActive} active={active} item="Our Models">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="AlexNet"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="CNN (Custom)"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="InceptionV3"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Ensemble Model"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
            </div>

            {/* Right side buttons (Signup, Login) */}
            <div className="flex justify-end space-x-6">
              <Link href="/register">
                <button className="text-white">Signup</button> {/* White text */}
              </Link>

              <Link href="/login">
                <button className="text-white">Login</button> {/* White text */}
              </Link>
            </div>
          </div>
        </Menu>
      )}
    </div>
  );
}

export default NavbarDemo;
