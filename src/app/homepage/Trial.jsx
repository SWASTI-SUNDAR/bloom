import React from 'react'

function Trial() {
  return (
    <div>
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
    </div>
  );
}

export default Trial
