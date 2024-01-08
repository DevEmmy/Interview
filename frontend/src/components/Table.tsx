import React from 'react'
import { EyeOutline, PencilAltOutline, TrashOutline } from "heroicons-react";

interface Props{
    users: Object[]
}

const Table = (props: Props) => {
  console.log(props.users)
  return (
    <div className="text-black w-full flex flex-col border rounded-lg p-6">
      <div>
        <div className="flex justify-between text-start tHead">
          <div className="text-start w-[30%]">Name</div>
          <div className="text-center w-[30%]">Email</div>
          <div className="text-center w-[20%]">Joined</div>
          <div className="text-center w-[20%]">Actions</div>
        </div>
      </div>

      {/* <Line /> */}
      <div className="flex flex-col gap-3 text-gray-500">
        {props.users.map((data: any, i: number) => {
          return (
            // <TableData key={i} values={Object.values(data)}/>
            <div
              className={`tRow py-3 px-2 rounded-lg flex justify-between`}
              key={i}
            >
              <div className="w-[30%]">{data.name}</div>
              <div className="text-center w-[30%]">{data.email}</div>
              <div className="w-[20%] text-center">2 Days ago</div>
              <div className="w-[20%] gap-[20px] flex items-center justify-center">
                <EyeOutline size={16} />
                <PencilAltOutline size={16} />
                <TrashOutline
                    size={16}
                />
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Table