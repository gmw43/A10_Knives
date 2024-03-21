import React, { useContext, useEffect, useState } from 'react'

import Slider from 'react-slick'
import Products from '../../SharedComp/Products'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Slider.css'
import { DataToCart } from '../../SharedComp/GlobalComp'

const Cards = () => {
  const { AddData, setAddData } = useContext(DataToCart)

  // const Navigate = useNavigate()

  // function handleNavigate(item) {
  //   Navigate('/Overview', { state: item })
  // }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [ProData, setProData] = useState([])
  useEffect(() => {
    let productData = JSON.parse(localStorage.getItem('items')) || []
    setProData(productData)
  }, [])
  return (
    <>
      <div>
        <div className="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Categories
          </h2>
          <Slider {...settings}>
            {Products.map((item, index) => (
              <div key={index}>
                <div className="group relative m-4">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={item.img}
                      alt="Image not shown"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-black">
                        <Link to="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {item.Category} | {item.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm">{item.Price} $</p>
                  </div>
                  <p className="mt-2 text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* static Cards */}

      <div className="bg-orange-300">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className=" text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Customers also purchased
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 b">
            {ProData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-300 p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 ">
                      <img
                        src={item.productImage}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75 "
                      />
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                      {item.description}
                    </p>
                    <div className="flex mt-2">
                      <p className="mr-2 text-lg font-medium text-gray-900">
                        {item.productName}
                      </p>
                      <span className="text-lg font-bold ">|</span>
                      <p className="ml-2 text-lg font-medium text-gray-900">
                        $ {item.price}
                      </p>
                    </div>
                  </div>
                  {/* <Link to={'/Overview'}> */}
                  <button
                    className="w-full  border-2 border-black my-4 py-2 transition ease-in-out delay-150  hover:-translate-y-.2 hover:scale-110 hover:bg-orange-300 duration-500 hover:border-none hover:text-white rounded-md"
                    onClick={() => {
                      setAddData([...AddData, item])
                    }}
                  >
                    Shop Now
                  </button>
                  {/* </Link> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
