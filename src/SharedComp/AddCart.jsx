import React, { useContext, useEffect, useState } from 'react'
import { DataToCart } from '../SharedComp/GlobalComp'
import { CloseOutlined } from '@ant-design/icons'

function AddCart() {
  const { AddData, setAddData } = useContext(DataToCart)

  const newArray = [...AddData]

  const handleDelete = (index) => {
    const updatedData = [...AddData]
    updatedData.splice(index, 1)
    setAddData(updatedData)
    // localStorage.setItem('product data', JSON.stringify(updatedData))
  }
  const [counter, setCounter] = useState(1)
  function handleIncreament() {
    setCounter(counter + 1)
  }
  function handleDecreament() {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className="   w-full ">
        {newArray.map((item, index) => {
          return (
            <div key={index} className="flex my-4 mx-8 p-2 bg-blue-gray-200">
              <div className="mx-2">
                <img
                  src={item.productImage}
                  alt=""
                  className="w-40 rounded-2xl"
                />
              </div>
              <div className="mx-2 w-full ">
                <div className="flex justify-between  my-1 ">
                  <p className="w-[70%] font-bold">{item.description}</p>
                  <p className="text-lg font-bold my-1">{item.price} $</p>
                </div>
                <p className="  text-red-400">Only 1 left</p>
                <p className=" ">NAME: {item.productName}</p>
                <p className="">CATEGORY :</p>
                <div className=" ">
                  QUANTITY :
                  <span className="bg-gray-300 rounded-sm mx-2 text-xl ">
                    <button
                      onClick={handleDecreament}
                      className=" px-2 rounded-md mx-1"
                    >
                      -
                    </button>
                    <span>{counter}</span>
                    <button
                      onClick={handleIncreament}
                      className=" px-2 rounded-md mx-1"
                    >
                      +
                    </button>
                  </span>
                </div>
                <button
                  title="Remove from cart"
                  className="hover:text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AddCart
