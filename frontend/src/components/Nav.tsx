import React from 'react'
import { Link } from 'react-router-dom'

interface NavActive {
  active: number 
}

const Nav = (prop: NavActive ) => {

  const items: NavItems[]  = [
    {
      link: "/",
      text: "Overview"
    },
    {
      link: "/users",
      text: "Users"
    }
  ]

  return (
    <div className='fixed w-1/5 top-0 bg-white border-r-2 border-r-gray-300 h-[100vh] flex flex-col gap-10 '>
        <div className="logo text-blue-400 text-[24px] font-bold py-5 border-b-gray-300 border-b px-5 ">
          User Management
        </div>

        <div className=" flex flex-col gap-[24px] p-3">
          {
            items.map((item: NavItems, i: number)=>{
              return(
                <Link to={item.link} key={i} className={`${prop.active === i && "bg-blue-400 text-white hover:bg-blue-800"} p-3 rounded-md cursor-pointer hover:bg-gray-200 transition-all`}>
                  {item.text}
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

interface NavItems {
  link: string,
  text: string
}

export default Nav