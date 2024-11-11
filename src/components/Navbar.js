"use client";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const data = [
    { title: "Chi siamo", to: "/about" },
    {
      title: "Comunità",
      to: "/community",
      items: [
        { title: "Buds", to: "Buds" },
        { title: "Students", to: "Students" },
        { title: "Parents", to: "Parents" },
        { title: "Bloomher", to: "Women" },
        { title: "Creators", to: "Creators" },
      ],
    },
    {
      title: "Servizio",
      to: "/service",
      items: [
        { title: "One to one tutoring", to: "tutoring" },
        { title: "Consulans pedagogica", to: "pedagogica" },
        { title: "Organize events", to: "events" },
        { title: "Projectzione", to: "projection" },
      ],
    },
    {
      title: "Network",
      to: "/network",
      items: [
        { title: "Bloom e Scuole", to: "schools" },
        { title: "Bloom e ISTITUZIONI ASSOCIAZIONI", to: "associations" },
        { title: "Bloom e Aziende", to: "companies" },
      ],
    },
    { title: "Eventi", to: "/events" },
    { title: "Spazio", to: "/space" },
  ];

  const handleMenuClick = (index) => {
    setDropdown((prevDropdown) => (prevDropdown === index ? null : index));
  };

  return (
    <>
      <nav className="flex lg:px-32 px-5 bg-white fixed py-3 z-50 backdrop-blur-2xl border-b-[3px] w-full justify-between items-center">
        <div>
          <Link href="/">
            <img className="h-10 lg:w-auto" src="/logo/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden text-md lg:flex gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
              className="relative group cursor-pointer dropdown-container"
            >
              {item.items ? (
                <span
                  className="flex justify-center items-center"
                  onClick={() => handleMenuClick(index)}
                >
                  <Link href={item.to || "/"}>{item.title}</Link>
                  <RiArrowDropDownLine className="text-xl" />
                </span>
              ) : (
                <Link href={item.to || "/"}>{item.title}</Link>
              )}

              {/* Dropdown Menu */}
              {item.items && dropdown === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`${item.to || ""}#${subItem.to || ""}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex gap-10 justify-center items-center">
          <Button>
            <Link href="/contact">Contattaci</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex gap-5">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="flex h-8 w-8"
          >
            <img
              src={show ? "/Navbar/close.svg" : "/Navbar/open.svg"}
              alt="Menu Toggle"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {show && (
        <div className="bg-white lg:hidden rounded-2xl w-screen right-0 border fixed mt-14 z-40">
          <div className="pt-4 flex flex-col items-start">
            {data.map((item, index) => (
              <div key={index} className="w-full">
                {item.items ? (
                  <>
                    <span className="font-semibold text-black text-[22px] p-3">
                      <Link href={item.to || "/"}>{item.title}</Link>
                    </span>
                    <div className="pl-4">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`${item.to || ""}#${subItem.to || ""}`}
                          className="block font-medium text-black p-2"
                          onClick={() => setShow(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.to || "/"}
                    className="font-semibold text-black text-[22px] p-3 w-full"
                    onClick={() => setShow(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="p-3 w-full">
              <Button>
                <Link href="/contact" onClick={() => setShow(false)}>
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
