import React, { useContext, useEffect, useState } from 'react'
import { DataToCart } from '../SharedComp/GlobalComp'
import { CloseOutlined } from '@ant-design/icons'
import OrderSummary from './OrderSummary'

function AddCart() {
  const { AddData, setAddData } = useContext(DataToCart)

  const newArray = [...AddData]

  const handleDelete = (index) => {
    const updatedData = [...AddData]
    updatedData.splice(index, 1)
    setAddData(updatedData)
    // localStorage.setItem('product data', JSON.stringify(updatedData))
  }
  // const [counter, setCounter] = useState(1)
  // function handleIncreament(index) {
  //   setCounter(counter + 1, index)
  // }
  // function handleDecreament(index) {
  //   if (counter !== 0) {
  //     setCounter(counter - 1, index)
  //   }
  // }
  function handleIncreament(index) {
    const updatedData = [...AddData]
    updatedData[index].quantity = (updatedData[index].quantity || 1) + 1
    setAddData(updatedData)
  }

  function handleDecreament(index) {
    const updatedData = [...AddData]
    updatedData[index].quantity = Math.max(
      (updatedData[index].quantity || 1) - 1,
      0
    )
    setAddData(updatedData)
  }

  return (
    <>
      <div className="flex">
        <div className=" w-3/4 ">
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
                        onClick={() => {
                          handleDecreament(index)
                        }}
                        className=" px-2 rounded-md mx-1"
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        onClick={() => {
                          handleIncreament(index)
                        }}
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
        <OrderSummary />
      </div>
    </>
  )
}

export default AddCart
