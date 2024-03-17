import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from '@material-tailwind/react'

const NavbarWithSearch = () => {
  const [openNav, setOpenNav] = React.useState(false)

  const NavLinks = [
    { link: 'Home' },
    { link: 'About Us' },
    { link: 'Category' },
    { link: 'Contact Us' },
  ]

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mt-2 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NavLinks.map((item, index) => {
        return (
          <Typography
            as="li"
            variant="small"
            color="white"
            className="flex items-center gap-x-2 p-1 font-medium"
            key={index}
          >
            <a href="#" className="flex items-center text-lg">
              {item.link}
            </a>
          </Typography>
        )
      })}
    </ul>
  )

  return (
    <Navbar
      className="w-full rounded-none z-10 max-w-full border-0  bg-transparent px-4 py-4 lg:px-8 lg:py-4 backdrop-saturate-10 backdrop-blur-none shadow-none fixed "
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-2xl"
        >
          A10 Knives
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: 'min-w-[220px] ',
              }}
              className="  text-white "
            />
          </div>
          <Button size="md" className="rounded-lg text-white  ">
            Search
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: 'min-w-[288px]',
                }}
                className=" !border-t-white-300 pl-9 placeholder:text-white-300 focus:!border-white-300"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              <div className="!absolute left-3 top-[13px]"></div>
            </div>
            <Button size="md" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}

export default NavbarWithSearch
