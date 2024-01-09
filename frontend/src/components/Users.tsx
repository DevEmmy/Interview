import React, { useState } from 'react'
import Table from './Table'
import { Plus } from 'heroicons-react';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { createUser } from '../requests/request';

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

    const [opened, { open, close }] = useDisclosure(false);

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState()

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = {email, name, password}
        createUser(data)
    }

  return (
    <div className='w-4/5 px-10'>
        <div className="profile flex items-center justify-end p-5">
            <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" className='w-[50px] h-[50px]' alt="" />
            <h2>Hi, Admin.</h2>
        </div>

        <div className='my-2'>
            <div className="flex justify-between items-center">
                <h2 className='py-5'>All Users</h2>
                
                <div onClick={open} className='flex bg-blue-400 px-5 py-2 rounded-lg w-fit text-white cursor-pointer'>
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

        <Modal
        opened={opened}
        onClose={close}
        title="Add User"
        
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <form action="" className='flex flex-col gap-5'>
            <input type="text" name="" id="" placeholder='name' value={name}  onChange={handleName}/>
            <input type="text" placeholder='email' value={email}  onChange={handleEmail}/>
            <input type="password" placeholder='password' value={password}  onChange={handlePassword}/>
            <button type="submit" onClick={handleSubmit} className='bg-blue-400 px-5 py-3 rounded-lg text-white'>Create User</button>
        </form>
      </Modal>

      {/* <Button onClick={open} className='bg-blue-400 px-5 py-3'>Open Modal</Button> */}
    </div>
  )
}

export default Users