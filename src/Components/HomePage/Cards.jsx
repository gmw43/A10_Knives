import React from 'react'
import Slider from 'react-slick'
import Products from '../../SharedComp/Products'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import '../Styles/Slider.css'

const Cards = () => {
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

  return (
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
  )
}

export default Cards
