import React from 'react'
import Table from './Table'
import { Plus } from 'heroicons-react'

const Users = () => {
    const users: any = [
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
          name: "Emmanuel Olaosebikan",
          email: "eolaosebikan60@gmail.com"
        },
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
          name: "Emmanuel Olaosebikan",
          email: "eolaosebikan60@gmail.com"
        }
    ]

  return (
    <div className='w-4/5 px-10'>
        <div className="profile flex items-center justify-end p-5">
            <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" className='w-[50px] h-[50px]' alt="" />
            <h2>Hi, Admin.</h2>
        </div>

        <div className='my-2'>
            <div className="flex justify-between items-center">
                <h2 className='py-5'>All Users</h2>
                
                <div className='flex bg-blue-400 px-5 py-2 rounded-lg w-fit text-white cursor-pointer'>
                    Add User <Plus />
                </div>
          
            </div>
          <Table users={users}/>
        </div>

        <div className="flex justify-center gap-10 my-5">
            <div className='py-2 px-5 bg-white border border-gray-300 hover:bg-black hover:text-white transition-all cursor-pointer rounded-lg'>
                previous
            </div>

            <div className='py-2 px-5 bg-white border border-gray-300 hover:bg-black hover:text-white transition-all cursor-pointer rounded-lg'>
                next
            </div>
        </div>
      
    </div>
  )
}

export default Users