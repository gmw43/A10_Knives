import React from 'react'

const OrderSummary = () => {
  return (
    <>
      <div className="w-1/4 my-4 p-4 bg-[#101820FF] text-[#FEE715FF] h-[100vh] ">
        <h1 className="text-2xl text-center mb-4">ORDER SUMMARY</h1>
        <div className="flex justify-between font-bold mb-1">
          <span>Sub-Total :</span>
          <span>00:00 $</span>
        </div>
        <div className="flex justify-between font-bold mb-1">
          <span>Shipping Fee :</span>
          <span>00:00 $</span>
        </div>
        <div className="flex justify-between font-bold mb-1">
          <span>Discount :</span>
          <span>00:00 $</span>
        </div>
        <div className="flex justify-between font-bold text-xl mb-1">
          <span>Grand-Total:</span>
          <span>00:00 $</span>
        </div>
        <button className="text-center text-xl font-bold text-[#101820FF] bg-[#FEE715FF] hover:bg-[#f0df49] hover:text-white rounded-md w-full p-2 mt-2 ">
          CHECK OUT
        </button>
      </div>
    </>
  )
}

export default OrderSummary
