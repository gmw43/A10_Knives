import React, { useState } from 'react'
import { Button, Radio, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/images/belly.jpg'

const AdminUser = () => {
  const navigateToMain = useNavigate()
  const [value, setValue] = useState(null)

  const handleRadioChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className="relative">
        <img src={bgImage} alt="" className="  h-[100vh] w-full bg-contain " />
      </div>
      <div className="flex flex-col w-1/3 m-auto p-4 absolute top-20 left-20 bg-blue-gray-300 rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl my-2">
            WellCome to
            <span className="text-red-700 text-3xl font-extrabold mx-1">
              A10 Knives
            </span>
          </h1>
          <p>
            Where precision meets craftsmanship. Explore our curated collection
            of knives, tailored to elevate your culinary or outdoor experience.
          </p>
        </div>
        <Space
          direction="vertical"
          className="m-auto my-4 bg-blue-gray-400 p-2 rounded-lg"
        >
          <Radio value={1} checked={value === 1} onChange={handleRadioChange}>
            Admin
          </Radio>
          <Radio value={2} checked={value === 2} onChange={handleRadioChange}>
            User
          </Radio>
        </Space>
        {value === 1 ? (
          <button
            className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-1 w-[40%] m-auto "
            onClick={() => {
              navigateToMain('/ProductForm')
            }}
          >
            Go as Admin
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-1 w-[40%] m-auto"
            onClick={() => {
              navigateToMain('/Home')
            }}
          >
            Go as User
          </button>
        )}

        {/* ( <button
          className="bg-blue-500 text-white hover:bg-blue-700 rounded-md p-1 w-[40%] m-auto"
          onClick={() => {
            navigateToMain('/ProductForm')
          }}
        >
          Select one
        </button>)
        } */}
      </div>
    </>
  )
}

export default AdminUser
