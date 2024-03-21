import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/images/company-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import DropdownItem from './Dropdown'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { DataToCart } from '../SharedComp/GlobalComp'

const HeaderNavbar = () => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()

  function handleMenu() {
    setMenu(!menu)
  }

  const { AddData } = useContext(DataToCart)

  const Category = {
    C1: 'Category 1',
    C2: 'Category 2',
    C3: 'Category 3',
  }

  return (
    <>
      <nav className=" z-10 fixed w-full">
        <div className="bg-transparent mx-auto max-w-full px-2 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* <!-- Mobile menu button--> */}

              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleMenu}
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className=" w-[100px]" src={logo} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    to="/Home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-lg leading-10 p-0 mt-[8px] font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-lg leading-10 p-0 mt-[8px] font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-lg leading-10 p-0 mt-[8px] font-medium"
                  >
                    <DropdownItem Category={Category} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-lg leading-10 p-0 mt-[8px] font-medium"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <span
                onClick={() => {
                  navigate('/AddCart')
                }}
                className=" cursor-pointer"
              >
                <ShoppingCartOutlined
                  style={{
                    color: 'white',
                    fontSize: '25px',
                    paddingRight: '1rem',
                    position: 'relative',
                  }}
                />
              </span>
              <sup className="text-white bg-blue-400 px-1 py-2 rounded-full absolute  top-3 right-2 ">
                {AddData.length}
              </sup>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {menu && (
          <div className="sm:hidden bg-blue-gray-400" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default HeaderNavbar
